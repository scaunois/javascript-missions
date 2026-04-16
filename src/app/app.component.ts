import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './shared/user/user.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthenticationService } from './shared/user/authentication.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, RouterOutlet],
  standalone: true,
})
export class AppComponent implements OnInit {
  authenticationService = inject(AuthenticationService);

  ngOnInit() {
    this.initUserFromLocalStorageIfPresent();
  }

  private initUserFromLocalStorageIfPresent() {
    const localStorageAuthenticatedUser = this.authenticationService.getAuthenticatedUserFromLocalStorage();
    if (localStorageAuthenticatedUser !== null) {
      this.authenticationService.authenticatedUserSubject$.next(localStorageAuthenticatedUser);
    }
  }
}
