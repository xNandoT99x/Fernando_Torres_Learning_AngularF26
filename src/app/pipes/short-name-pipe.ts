import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  transform(name: string | null | undefined, shorten: boolean = true): string {
    if (!name) return 'Unknown';

    if (!shorten) return name;

    const parts = name.trim().split(/\s+/);

    if (parts.length === 1) return parts[0];

    return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
  }
}
