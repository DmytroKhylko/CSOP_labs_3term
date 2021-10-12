import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'child-component',
  template: '<h2>Змінений текст: {{reversed_text}}</h2>',
  styleUrls: ['./app.component.css']
})
export class ChildComponent implements OnInit, OnChanges{
  @Input() userText: string = "";
  text = this.userText;
  reversed_text = "";
  ngOnInit(){
    this.text = this.userText 
  }
  ngOnChanges(){
      this.text = this.userText;
      this.reversed_text = "";
      for (let i = 0; i < this.text.length; i++) {
          let element = this.text[this.text.length - i -1];
          if (element == 'a') {
              element = '!';
          }
          this.reversed_text += element;
      }
  }
}