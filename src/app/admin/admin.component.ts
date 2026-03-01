import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrl: './admin.component.css',
	standalone: true,
	imports: [
		RouterLink,
		RouterOutlet
	]
})
export class AdminComponent {

}
