import {Component, inject} from '@angular/core';
import {AuthenticationService} from "../shared/user/authentication.service";
import {LucideLogOut} from "@lucide/angular";

@Component({
  selector: 'app-login-status',
	standalone: true,
	imports: [
		LucideLogOut
	],
  templateUrl: './login-status.component.html',
  styleUrl: './login-status.component.css',
})
export class LoginStatusComponent {
	authenticationService = inject(AuthenticationService);

	authenticatedUser = this.authenticationService.authenticatedUser;

	logout(): void {
		this.authenticationService.clearAuthenticatedUser();
	}
}
