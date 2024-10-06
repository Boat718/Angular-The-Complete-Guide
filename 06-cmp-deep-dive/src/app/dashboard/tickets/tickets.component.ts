import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] =  [];

  onAdd(ticketData: {titleInput:string, textInput:string}): void {
    const ticket: Ticket = {
      id: Math.random().toString(36),
      title: ticketData.titleInput,
      request: ticketData.textInput,
      status: 'open'
    }
    this.tickets.push(ticket);
  }

  onCloseTicket(id:string): void {
    this.tickets = this.tickets.map((ticket)=>{
      if(ticket.id === id) {
        ticket.status = 'closed';
      }
      return ticket;
    })
  }
}
