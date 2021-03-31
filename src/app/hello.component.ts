import { Component, Input } from '@angular/core';

@Component({
  selector: 'Bank',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family:Sofia ; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
