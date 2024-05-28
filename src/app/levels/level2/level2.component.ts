import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component {

	levelForm: FormGroup;

	constructor(fb: FormBuilder) {
		this.levelForm = fb.group({
			q1: '',
			q2: '',
		});
	}

	validateAnswers(): void {
		const fv = this.levelForm.value;
		const success = fv.q1 === '2' && fv.q2 === '5'
		if (success)
			alert("quizz completed!")
		else
			alert("try again!")
	}

}
