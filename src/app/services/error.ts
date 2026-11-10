import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  readonly errorMessage = signal<string | null>(null);

  clearError(): void {
    this.errorMessage.set(null);
  }
}

