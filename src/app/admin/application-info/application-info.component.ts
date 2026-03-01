import { Component, inject, OnInit, signal } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Database, getDatabase, objectVal, ref } from '@angular/fire/database';
import { AppInfo } from '../../shared/firebase/firebase-entities.model';

@Component({
  selector: 'app-application-info',
  imports: [],
  templateUrl: './application-info.component.html',
  styleUrl: './application-info.component.css',
	standalone: true,
})
export class ApplicationInfoComponent {

	private database: Database;

	angularVersion = signal('');

	constructor() {
		this.database = getDatabase(inject(FirebaseApp));

		objectVal<AppInfo>(ref(this.database, 'admin/app-info')).subscribe(appInfo => {
			this.angularVersion.set(appInfo.angularVersion);
		})
	}

}
