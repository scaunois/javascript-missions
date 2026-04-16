import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Highlight } from 'ngx-highlightjs';
import { AbstractQuizComponent } from '../abstract-quiz.component';
import { ConfettiComponent } from '../../confetti/confetti.component';

@Component({
  selector: 'app-level1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css'],
  imports: [ReactiveFormsModule, Highlight, ConfettiComponent],
  standalone: true,
})
export class Quiz1Component extends AbstractQuizComponent {
  override initForm(): FormGroup {
    return this.fb.group({
      q1: '',
      q2: '',
      q3: '',
      q4: '',
    });
  }

  override validateAnswers(): void {
    const fv = this.levelForm.value;
    const success = fv.q1 === '3' && fv.q2 === '3' && fv.q3 === '1' && fv.q4 === '3';
    if (success) {
      this.triggerConfetti();
    } else {
      alert('try again!'); // TODO
    }
  }
}
