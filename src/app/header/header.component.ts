import {Component, inject, input, signal} from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import {AuthenticationService} from "../shared/user/authentication.service";
import {LoginStatusComponent} from "../login-status/login-status.component";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	standalone: true,
	imports: [
		NavComponent,
		LoginStatusComponent
	]
})
export class HeaderComponent {
	authenticationService = inject(AuthenticationService);

	isAuthenticated = this.authenticationService.isAuthenticated;
}
