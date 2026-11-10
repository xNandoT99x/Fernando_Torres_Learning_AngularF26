import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditGuard } from './services/edit-guard';
import { LoadingService } from './services/loading';
import { ErrorService } from './services/error';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly editGuard = inject(EditGuard);
  readonly loadingService = inject(LoadingService);
  readonly errorService = inject(ErrorService);

  protected readonly title = signal('project1');
}
