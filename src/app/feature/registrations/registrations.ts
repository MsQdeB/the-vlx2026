import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrations',
  standalone: true,
  templateUrl: './registrations.html',
  styleUrls: ['./registrations.css'],
})
export class RegistrationsComponent implements OnInit, OnDestroy {
  countdown = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  showCountdown = true;

  private intervalId: any;
  private targetDate = new Date('2025-11-29T16:00:00+07:00'); // November 29, 2025

  constructor() {}

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();

    if (difference > 0) {
      // Calculate total days
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

      // Calculate months and remaining days
      this.countdown.months = Math.floor(totalDays / 30);
      const remainingDays = totalDays % 30;
      this.countdown.days = remainingDays;

      // Calculate hours, minutes, seconds
      this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
      // Event has started or passed
      this.countdown = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.showCountdown = false;
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  }

  onRegisterClick() {
    // Open registration link
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSegnsMdwTXmkvnNPksnrTlwK6dWzqmEo3yXc8czvQHiNgsCWg/closedform',
      '_blank',
    );
  }

  onTshirtPreorderClick() {
    // Open t-shirt pre-order link (update with actual link when available)
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSemLT--n_0Qu-dTp9ffHaeSHsFXrNXP7pcUTjyLUYkTq7cIWw/viewform',
      '_blank',
    );
  }
}
