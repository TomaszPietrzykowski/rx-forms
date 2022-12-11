import { AbstractControl } from '@angular/forms';

export class MathValidators {
  // declare methods as static to make them accessible on the class
  // without initializing an instance
  // static will use onlly values provided, no access to class properies
  static add(sourceOne: string, sourceTwo: string, result: string) {
    return (form: AbstractControl) => {
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];
      const sum = form.value[result];
      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }
      return { addition: true };
    };
  }
}
