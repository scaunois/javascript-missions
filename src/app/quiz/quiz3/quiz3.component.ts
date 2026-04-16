import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Highlight } from 'ngx-highlightjs';
import { ConfettiComponent } from '../../confetti/confetti.component';
import { AbstractQuizComponent } from '../abstract-quiz.component';

@Component({
  selector: 'app-level3',
  templateUrl: './quiz3.component.html',
  styleUrls: ['./quiz3.component.css'],
  imports: [ReactiveFormsModule, Highlight, ConfettiComponent],
  standalone: true,
})
export class Quiz3Component extends AbstractQuizComponent {
  override initForm(): FormGroup {
    return this.fb.group({
      q1: '',
      q2: '',
      q3: '',
    });
  }

  override validateAnswers(): void {
    const fv = this.levelForm.value;
    const success = fv.q1 === '3' && fv.q2 === '2' && fv.q3 === '1';
    if (success) {
      this.triggerConfetti();
    } else alert('try again!');
  }
}
