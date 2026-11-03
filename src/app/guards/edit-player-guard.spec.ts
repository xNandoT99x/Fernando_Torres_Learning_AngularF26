import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { editPlayerGuard } from './edit-player-guard';

describe('editPlayerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => editPlayerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
