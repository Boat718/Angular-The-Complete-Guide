import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus:'online' | 'offline' | 'unknown' = 'unknown';
  private interval?: ReturnType<typeof setInterval>;
  constructor() {}

  ngOnInit() {
    // Simulate server status every 5 seconds
    this. interval = setInterval(() => {
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

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    clearInterval(this.interval);
  }
}
