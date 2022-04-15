import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, maxLength: number = 20): string {
    if(value.length <= maxLength) return value;

    return value.substring(0, maxLength) + '...'
  }

}
