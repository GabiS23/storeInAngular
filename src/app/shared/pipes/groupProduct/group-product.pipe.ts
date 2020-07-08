import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupProduct'
})
export class GroupProductPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
