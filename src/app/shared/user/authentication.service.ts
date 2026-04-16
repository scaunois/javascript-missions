import { User } from './user.model';
import { BehaviorSubject, delay, iif, map, Observable, of, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { inject, Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';

/**
 * Class to handle user authentication
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  firebaseService = inject(FirebaseService);

  authenticatedUserSubject$ = new BehaviorSubject<User | null>(null);

  isAuthenticated = toSignal(this.authenticatedUserSubject$.pipe(map((user) => user !== null)), { requireSync: true });

  authenticatedUser = toSignal(this.authenticatedUserSubject$, { requireSync: true });

  logIn$(username: string, password: string): Observable<boolean> {
    return this.firebaseService.getUser$(username).pipe(
      // check password (not very secure, you're right!) // <-- TODO temp code, replace by real security
      map((user) => (user?.password === password ? user : null)),
      // Aad a little delay to avoid the login being too fast (http call has responded almost instantly)
      switchMap((user) => of(user).pipe(delay(!!user ? 1000 : 500))),
      tap((user) => {
        if (user) {
          console.log(`Successfully authenticated as [${username}]`);
          this.storeAuthenticatedUserInLocalStorage(user);
          this.authenticatedUserSubject$.next(user);
        }
      }),
      map((user) => !!user),
    );
  }

  getAuthenticatedUserFromLocalStorage(): User | null {
    const localStorageAuthenticatedUser = localStorage.getItem('authenticatedUser');
    return localStorageAuthenticatedUser ? JSON.parse(localStorageAuthenticatedUser) : null;
  }

  storeAuthenticatedUserInLocalStorage(user: User): void {
    localStorage.setItem('authenticatedUser', JSON.stringify(user));
    this.authenticatedUserSubject$.next(user);
  }

  clearAuthenticatedUser(): void {
    localStorage.removeItem('authenticatedUser');
    this.authenticatedUserSubject$.next(null);
  }
}
