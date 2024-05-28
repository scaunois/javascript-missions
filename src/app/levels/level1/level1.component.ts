import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component {

	levelForm: FormGroup;

	constructor(fb: FormBuilder) {
		this.levelForm = fb.group({
			q1: '',
			q2: '',
			q3: '',
			q4: '',
		});
	}

	validateAnswers(): void {
		const fv = this.levelForm.value;
		const success = fv.q1 === "3"
			&& fv.q2 === "3"
			&& fv.q3 === "1"
			&& fv.q4 === "3";
		if (success)
			alert("quizz completed!")
		else
			alert("try again!")
	}
}
