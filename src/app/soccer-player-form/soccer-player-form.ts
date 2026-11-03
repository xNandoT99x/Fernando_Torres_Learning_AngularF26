import { Component,inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SoccerPlayer } from '../services/soccer-player';
import { SoccerPlayer as Player } from  '../../shared/models/soccer-player'
import { RouterLink } from '@angular/router';
@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-soccer-player-form',
  styleUrl: './soccer-player-form.css',
  templateUrl: './soccer-player-form.html',
})
export class SoccerPlayerForm {
  private fb = inject(FormBuilder);
  private playerService = inject(SoccerPlayer);

  playerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    age: [18, Validators.required],
    nationality: ['', Validators.required],
    club: ['', Validators.required],
    position: ['Forward'],
  });
  onSubmit(): void {
    if (this.playerForm.invalid) return;

    const value = this.playerForm.getRawValue();

    const newPlayer: Player = {
      id: Math.max(0, ...this.playerService.playersList().map((player) => player.id)) + 1,
      name: value.name!,
      age: value.age!,
      nationality: value.nationality!,
      club: value.club!,
      position: value.position as Player['position'],
    };

    this.playerService.addPlayer(newPlayer);

    this.playerForm.reset({
      name: '',
      age: 18,
      nationality: '',
      club: '',
      position: 'Forward',
    });
  }
}
