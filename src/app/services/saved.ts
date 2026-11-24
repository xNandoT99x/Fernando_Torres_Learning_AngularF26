import { Service,signal, effect } from '@angular/core';

@Service()
export class Saved {
  private storageKey = 'soccer-players.saved';
  private saved = signal<number[]>(this.load());
  readonly savedIds = this.saved.asReadonly();
  private positionKey = 'soccer-players.position';
  private position = signal<string>(this.loadPosition());
  readonly selectedPosition = this.position.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.saved()));
      } catch {
        // Storage full or blocked: keep working in memory.
      }
    });
    effect(() => {
      try {
        localStorage.setItem(this.positionKey, this.position());
      } catch {
        // Storage full or blocked: keep working in memory.
      }
    });
  }

  toggle(id: number): void {
    this.saved.update((ids) =>
      ids.includes(id) ? ids.filter((savedId) => savedId !== id) : [...ids, id],
    );
  }
  isSaved(id: number): boolean {
    return this.saved().includes(id);
  }
setPosition(position: string): void {
  this.position.set(position);
}

  private load(): number[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
    } catch {
      return [];
    }
  }
  private loadPosition(): string {
    try {
      return localStorage.getItem(this.positionKey) ?? 'All';
    } catch {
      return 'All';
    }
  }
}
