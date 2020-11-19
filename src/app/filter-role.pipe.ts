import { Pipe, PipeTransform } from '@angular/core';
import {User} from './model/user';

@Pipe({
  name: 'filterRole'
})
export class FilterRolePipe implements PipeTransform {

  transform(value: User[], ...args: unknown[]): unknown {
    if (args[0]) {
      if (args[0] === 'profesor') {
        return value.filter(user => user.role === 'profesor');
      } else if (args[0] === 'alumno') {
        return value.filter(user => user.role === 'alumno');
      }
    }
    return value;
  }

}
