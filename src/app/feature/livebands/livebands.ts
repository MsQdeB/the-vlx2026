import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-livebands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livebands.html',
  styleUrl: './livebands.css',
})
export class LivebandsComponent {
  bands = [
    {
      name: 'HAT JAZZ BAND',
      description:
        '"Our very own local Jazz band whose positivity have made our past events so full of energy! Our local band, the HAT Jazz Band, simply the best Jazz band in Da Nang, Vietnam."',
      image: '/assets/live-bands/Band-HATJAZZBAND.jpg',
    },
    {
      name: 'ASIAN GOLDEN SWING QUARTET',
      description:
        '"Coming all the way from Japan, Asian Golden Swing Quartet has been playing at big Swing Dance events and is loved by many dancers. Join us welcome their time in Vietnam!"',
      image: '/assets/live-bands/Band Asian-Golden-Swing-Quartet.jpg',
    },
  ];
}
