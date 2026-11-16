import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionLabel',
})
export class PositionLabelPipe implements PipeTransform {
  private labels: Record<string, string> = {
    Forward: 'FWD',
    Midfielder: 'MDF',
    Defender: 'DEF',
    Goalkeeper: 'GK',
  };
  transform(position: string | null | undefined): string {
    if (!position) return 'Unknown';

    return this.labels[position] ?? position;
  }
}
