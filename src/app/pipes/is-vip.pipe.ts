import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isVip'
})
/**
 * A pipe that checks if a given value represents a date before January 1, 2020.
 *
 * @param value The value to check.
 * @returns `true` if the value represents a date before January 1, 2020, `false` otherwise.
 */
export class IsVipPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): boolean {
    if (!value) {
      return false;
    }
    return (value < '2020-01-01');
  }

}
