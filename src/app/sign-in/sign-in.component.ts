import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/user/authentication.service';
import { LucideLogIn } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { concatMap, delay, delayWhen, finalize, timer } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, LucideLogIn, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  standalone: true,
})
export class SignInComponent {
  fb = inject(FormBuilder);
  authenticationService = inject(AuthenticationService);

  loading = signal(false);
  hasAuthenticationError = signal(false);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const { username, password } = this.form.value;

    if (username && password) {
      this.loading.set(true);
      this.authenticationService.logIn$(username, password).subscribe((isAuthenticated) => {
        this.hasAuthenticationError.set(!isAuthenticated);
        this.loading.set(false);
      });
    }
  }
}
