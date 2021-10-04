import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './lab3.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input() sideA: number = 0;
  // @Input() sideB: number = 0;
  title = 'my-app';
  sideA = '';
  sideB = '';
  perimeter: number = 0;
  square: number = 0;
  clear(event: any){
    this.sideA = '';
    this.sideB = '';
    console.log(event)
  } 
  calculate(){
    this.square = 1/2 * +this.sideA * +this.sideB;
    this.perimeter = +this.sideA + +this.sideB + Math.sqrt(+this.sideA * +this.sideA + +this.sideB * +this.sideB);
    console.log(this.perimeter);
  }
}
