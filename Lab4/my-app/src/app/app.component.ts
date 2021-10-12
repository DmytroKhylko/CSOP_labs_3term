import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './lab4.component.html',
  template: `<p>Inpur your text there:</p>
              <input [(ngModel)]="text" type="text" >
            <child-component [userText]="text" ></child-component>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = "";
  // @Input() userText: string|undefined;
  // // @Input() sideB: number = 0;
  // title = 'my-app';
  // sideA = '';
  // sideB = '';
  // perimeter: number = 0;
  // square: number = 0;
  // clear(event: any){
  //   this.sideA = '';
  //   this.sideB = '';
  //   console.log(event)
  // } 
  // calculate(){
  //   this.square = 1/2 * +this.sideA * +this.sideB;
  //   this.perimeter = +this.sideA + +this.sideB + Math.sqrt(+this.sideA * +this.sideA + +this.sideB * +this.sideB);
  //   console.log(this.perimeter);
  // }
}
