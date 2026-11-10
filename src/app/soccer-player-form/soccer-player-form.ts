import { Component,inject,input, effect } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SoccerPlayer } from '../services/soccer-player';
import { SoccerPlayer as Player } from  '../../shared/models/soccer-player'
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { noWhitespaceValidator } from '../validators/no-whitespace.validator';
import { goalkeeperAgeValidator } from '../validators/goalkeeper-age.validator';


@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-soccer-player-form',
  styleUrl: './soccer-player-form.css',
  templateUrl: './soccer-player-form.html',
})
export class SoccerPlayerForm {
  id = input<string>();
  private fb = inject(FormBuilder);
  private playerService = inject(SoccerPlayer);
  private router = inject(Router);

  playerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
    age: [18, Validators.required],
    nationality: ['', Validators.required],
    club: ['', Validators.required],
    position: ['Forward'],
    nicknames:this.fb.nonNullable.array<string>([])
  }, {validators: goalkeeperAgeValidator });
  get nicknames(): FormArray {
    return this.playerForm.controls.nicknames;
  }

  addNickname(): void {
    this.nicknames.push(this.fb.control(''));
  }

  removeNickname(index: number): void {
    this.nicknames.removeAt(index);
  }


  constructor() {
    effect(() => {
      const id = this.id();

      if (id) {
        const player = this.playerService.playersList().find((player) => player.id === Number(id));

        if (player) {
          this.playerForm.patchValue(player);
          this.nicknames.clear();
          player.nicknames?.forEach(nickname => {
            this.nicknames.push(this.fb.nonNullable.control(nickname));

          });
        }
      }
    });
  }
  onSubmit(): void {
    if (this.playerForm.invalid) return;

    const value = this.playerForm.getRawValue();
    const id = this.id();



    const player: Player = {
      id: id
      ? Number(id)
        : Math.min(0, ...this.playerService.playersList().map(player => player.id)) - 1,
      name: value.name!,
      age: value.age!,
      nationality: value.nationality!,
      club: value.club!,
      position: value.position as Player['position'],
      nicknames: value.nicknames
    };

    if (id) {
      this.playerService.updatePlayer(player);
      this.router.navigate(['/soccer-players', id]);
    } else {
      this.playerService.addPlayer(player);
    }


    this.playerForm.reset({
      name: '',
      age: 18,
      nationality: '',
      club: '',
      position: 'Forward',
    });
  }
}
