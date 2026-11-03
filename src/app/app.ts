import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditGuard } from './services/edit-guard';


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly editGuard = inject(EditGuard);

  protected readonly title = signal('project1');

}
