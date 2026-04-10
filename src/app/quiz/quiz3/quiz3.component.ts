import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Highlight } from 'ngx-highlightjs';

@Component({
	selector: 'app-level3',
	templateUrl: './quiz3.component.html',
	styleUrls: ['./quiz3.component.css'],
	imports: [
		ReactiveFormsModule,
		Highlight
	],
	standalone: true
})
export class Quiz3Component {

	levelForm: FormGroup;

	constructor(fb: FormBuilder) {
		this.levelForm = fb.group({
			q1: '',
			q2: '',
			q3: '',
		});
	}

	validateAnswers(): void {
		const fv = this.levelForm.value;
		const success = fv.q1 === '3' && fv.q2 === '2' && fv.q3 === '1';
		if (success)
			alert("quizz completed!")
		else
			alert("try again!")
	}

}
