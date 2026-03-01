import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { firebaseConfig } from './firebase.config';

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(APP_ROUTES),
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
				fullLibraryLoader: () => import('highlight.js')
			}
		},
		provideFirebaseApp(() => initializeApp(firebaseConfig)),
	]
})
	.catch(err => console.error(err));
