import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus:'online' | 'offline' | 'unknown' = 'unknown';

  constructor() {
    setInterval(() => {
      const rnd = Math.floor(Math.random() *10);
      if(rnd < 5) {
        this.currentStatus = 'online';
      } else if(rnd < 9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
