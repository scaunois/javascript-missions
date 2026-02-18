import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './levels/level1/level1.component';
import { Level2Component } from './levels/level2/level2.component';
import { Level3Component } from './levels/level3/level3.component';

export const APP_ROUTES: Routes = [

	{ path: '', redirectTo: 'accueil', pathMatch: 'full' },

	{ path: 'accueil', component: HomeComponent },

	{
		path: 'niveaux', children: [
			{ path: '1', component: Level1Component },
			{ path: '2', component: Level2Component },
			{ path: '3', component: Level3Component },
		]
	}

];
