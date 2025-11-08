import { Component } from '@angular/core';

@Component({
  selector: 'app-registrations',
  standalone: true,
  templateUrl: './registrations.html',
  styleUrls: ['./registrations.css'],
})
export class RegistrationsComponent {
  constructor() {}

  onRegisterClick() {
    // Open registration link
    window.open('https://google.com', '_blank');
  }
}
