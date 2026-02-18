import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Highlight } from 'ngx-highlightjs';

@Component({
	selector: 'app-level2',
	templateUrl: './level2.component.html',
	styleUrls: ['./level2.component.css'],
	imports: [
		ReactiveFormsModule,
		Highlight,
	],
	standalone: true
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
