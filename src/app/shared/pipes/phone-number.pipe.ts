import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value && value.length === 10) {
      return '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + ' ' + value.substring(6);
    }
    return null;
  }

  // 3333333333 -> (333) 333 3333

}
