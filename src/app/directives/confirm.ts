import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)': 'confirmAction()',
  },
})
export class Confirm {
  question = input('Are you sure?', { alias: 'appConfirm' });
  confirmed = output<void>();
  confirmAction():void{
    if(confirm(this.question())) {
      this.confirmed.emit();
    }
  }
}
