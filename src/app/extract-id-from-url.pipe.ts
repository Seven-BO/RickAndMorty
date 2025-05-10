import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractIdFromUrl',
})
export class ExtractIdFromUrlPipe implements PipeTransform {
  transform(url: string): string {
    if (!url) return '';
    const parts = url.split('/');
    return parts[parts.length - 1];
  }
}