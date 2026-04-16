import { inject, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export abstract class AbstractQuizComponent {
  fb = inject(FormBuilder);

  levelForm: FormGroup;
  showConfetti = signal(false);

  constructor() {
    this.levelForm = this.initForm();
  }

  abstract initForm(): FormGroup;
  abstract validateAnswers(): void;

  triggerConfetti(): void {
    this.showConfetti.set(false);
    setTimeout(() => {
      this.showConfetti.set(true);
    });
  }
}
