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
    window.open('https://docs.google.com/forms/d/1Um40FnZCoi6Aq6HMq45zkebY9f4StYoUmt673huX_7g/edit', '_blank');
  }
}
