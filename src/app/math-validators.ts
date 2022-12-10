import { AbstractControl } from '@angular/forms';

export class MathValidators {
  // declare methods as static to make them accessible on the class
  // without initializing an instance
  // static will use onlly values provided, no access to class properies
  static add(form: AbstractControl) {
    const { a, b, answer } = form.value;
    if (a + b === parseInt(answer)) {
      return null;
    }
    return { addition: true };
  }
}
