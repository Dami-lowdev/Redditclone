import { Component } from '@angular/core';

@Component({
  selector: 'app-fibo',
  templateUrl: './fibo.component.html',
  styleUrls: ['./fibo.component.css']
})
export class FiboComponent {

  n: number = 0;
  result: number = 0;

  calculate(): void {
    if (this.n == 0) {
      this.result = 0;
    } else if (this.n == 1) {
      this.result = 1;
    } else {
      let n1: number = 0;
      let n2: number = 1;
      let n3: number = 1;
      for (let i: number = 2; i <= this.n; i++) {
        n3 = n1 + n2;
        n1= n2;
        n2= n3;
      }
      this.result = n3;
    }
  }
}
