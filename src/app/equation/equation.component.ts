import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay, filter } from 'rxjs';

import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss'],
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    // pass keys to custom validator
    [MathValidators.add('a', 'b', 'answer')]
  );

  ngOnInit() {
    const startTime = new Date();
    let numberSolved = 0;

    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(100)
      )
      .subscribe(() => {
        numberSolved++;

        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: '',
        });
      });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
  get a() {
    return this.mathForm.value.a;
  }
  get b() {
    return this.mathForm.value.b;
  }
}
