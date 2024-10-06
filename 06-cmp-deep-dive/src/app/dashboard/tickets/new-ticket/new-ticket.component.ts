import { AfterViewInit, Component, ElementRef, output, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{

  @ViewChild('form') form?:ElementRef<HTMLFormElement>;

  // @Output() add = new EventEmitter();
  add = output<{titleInput:string, textInput:string}>();

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
    console.log(this.form?.nativeElement);
  }

  onSubmit (titleInput:string, textInput:string):void {
    this.add.emit({titleInput:titleInput, textInput:textInput});
    // form.reset()
    this.form?.nativeElement.reset();
  }

}
