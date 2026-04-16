import {Component, inject, signal} from '@angular/core';
import {FirebaseService} from "../../shared/firebase/firebase.service";

@Component({
  selector: 'app-application-info',
  imports: [],
  templateUrl: './application-info.component.html',
  styleUrl: './application-info.component.css',
	standalone: true,
})
export class ApplicationInfoComponent {
	firebaseService = inject(FirebaseService);

	angularVersion = signal('');

	constructor() {
		this.firebaseService.getAppInfo$().subscribe(appInfo => {
			this.angularVersion.set(appInfo.angularVersion);
		})
	}

}
