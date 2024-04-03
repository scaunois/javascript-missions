
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './levels/level1/level1.component';

const appRoutes: Routes = [

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  { path: 'accueil', component: HomeComponent },

	{
		path: 'niveaux', children: [
			{ path: '1', component: Level1Component }
		]
	}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
