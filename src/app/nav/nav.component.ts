import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css'],
	imports: [
		RouterLink,
		RouterLinkActive
	],
	standalone: true
})
export class NavComponent {

}
