import { Component, Input, signal } from '@angular/core';
import { NgxConfettiExplosionComponent } from 'ngx-confetti-explosion';

@Component({
  selector: 'app-confetti',
  standalone: true,
  imports: [NgxConfettiExplosionComponent],
  templateUrl: './confetti.component.html',
  styleUrl: './confetti.component.css',
})
export class ConfettiComponent {
  readonly confettiSize = 8;
  readonly colorMagenta = '#FF00FF';
  readonly colorGreen = '#00CC00';
  readonly colorYellow = '#FFC700';
  readonly colorRed = '#FF0000';
  readonly colorBlue = '#002EFF';
  readonly colorCyan = '#48E3F3';

  readonly confettiColors = [
    this.colorMagenta,
    this.colorGreen,
    this.colorYellow,
    this.colorRed,
    this.colorBlue,
    this.colorCyan,
  ];

  readonly windowWidth = 3000;
  readonly windowHeigth = 1200;

  @Input() displayed!: boolean;
}
