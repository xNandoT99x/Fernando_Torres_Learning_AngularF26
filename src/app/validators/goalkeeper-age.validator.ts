import { AbstractControl, ValidationErrors } from '@angular/forms';

export function goalkeeperAgeValidator(control: AbstractControl): ValidationErrors | null {
  const age = control.get('age')?.value;
  const position = control.get('position')?.value;

  if (position === 'Goalkeeper' && age < 18) {
    return { goalkeeperAge: true };
  }

  return null;
}

