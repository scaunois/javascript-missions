import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Highlight } from 'ngx-highlightjs';
import { AbstractQuizComponent } from '../abstract-quiz.component';
import { ConfettiComponent } from '../../confetti/confetti.component';

@Component({
  selector: 'app-level2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css'],
  imports: [ReactiveFormsModule, Highlight, ConfettiComponent],
  standalone: true,
})
export class Quiz2Component extends AbstractQuizComponent {
  override initForm(): FormGroup {
    return this.fb.group({
      q1: '',
      q2: '',
    });
  }

  override validateAnswers(): void {
    const fv = this.levelForm.value;
    const success = fv.q1 === '2' && fv.q2 === '5';
    if (success) {
      this.triggerConfetti();
    } else alert('try again!'); // TODO
  }
}
