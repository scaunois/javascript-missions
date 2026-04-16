import {Component, computed, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FirebaseService} from "../shared/firebase/firebase.service";
import {delay, EMPTY, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/user/authentication.service";

@Component({
	selector: 'app-sign-up',
	standalone: true,
	imports: [
		ReactiveFormsModule,
	],
	templateUrl: './sign-up.component.html',
	styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
	fb = inject(FormBuilder);
	router = inject(Router);
	firebaseService = inject(FirebaseService);
	authenticationService = inject(AuthenticationService);

	form = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required]
	});

	userAlreadyExists = signal(false);
	existingUserUsername = signal('');

	onSubmit(): void {
		const {username, password} = this.form.value;

		if (!username || !password) return;

		// First, check that this username is not already taken by another registered user
		this.firebaseService.isExistingUser$(username)
			.pipe(
				switchMap(userAlreadyExists => {
					this.userAlreadyExists.set(userAlreadyExists);
					if (userAlreadyExists) {
						this.existingUserUsername.set(username);
					}

					return userAlreadyExists ? EMPTY : this.firebaseService.createUser$(username, password);
				}),
				// automatically log the created user in
				switchMap(_ => {
					return this.authenticationService.logIn$(username, password);
				}),
			).subscribe(isAuthenticated => this.router.navigate(['/']));
	}
}
