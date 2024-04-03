import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './levels/level1/level1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    Level1Component
  ],
	imports: [
		// main modules
		AppRoutingModule,
		BrowserModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		// vendor modules
		HighlightModule,

	],
  providers: [
		{
			provide: HIGHLIGHT_OPTIONS,
			useValue: {
				fullLibraryLoader: () => import('highlight.js')
			}
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
