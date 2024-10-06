import { Component, ContentChild, ElementRef, HostBinding, HostListener, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }
  label = input.required<string>();

  @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  onClick (){
    console.log('Control clicked');
    console.log(this.control)
  }
}
