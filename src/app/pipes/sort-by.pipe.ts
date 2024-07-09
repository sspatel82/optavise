import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'sortBy'
})
/**
 * A pipe that sorts an array of `Employee` objects by a specified property in ascending or descending order.
 *
 * @param value - The array of `Employee` objects to be sorted.
 * @param prop - The property of the `Employee` object to sort by.
 * @param order - The sort order, either 'asc' for ascending or 'desc' for descending. Defaults to 'asc'.
 * @returns The sorted array of `Employee` objects, or the original array if `value` is `undefined` or `prop` is `undefined`.
 */
export class SortByPipe implements PipeTransform {

  transform(value: Employee[] | undefined, prop: string, order: 'asc' | 'desc' = 'asc'): Employee[] | undefined {
    if (!value || !prop) {
      return value;
    }

    return [...value].sort((a, b) => {
      const aValue = (a as any)[prop];
      const bValue = (b as any)[prop];

      if (aValue < bValue) {
        return order === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

}
