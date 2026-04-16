import {inject, Injectable} from "@angular/core";
import {User} from "../user/user.model";
import {
	Database,
	DatabaseReference,
	equalTo,
	get,
	objectVal,
	orderByChild,
	push,
	query,
	ref
} from "@angular/fire/database";
import {from, map, Observable, tap} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {AppInfo} from "./firebase-entities.model";

/**
 * Class to handle calls to the Firebase database
 */
@Injectable({providedIn: 'root'})
export class FirebaseService {
	database = inject(Database);

	isExistingUser$(username: string): Observable<boolean> {
		const usersRef = ref(this.database, 'users');
		return fromPromise(get(query(
			usersRef,
			orderByChild('username'),
			equalTo(username)
		))).pipe(map(userSnapshot => userSnapshot.exists()));
	}

	getUser$(username: string): Observable<User | null> {
		const usersRef = ref(this.database, 'users');
		return fromPromise(get(query(
			usersRef,
			orderByChild('username'),
			equalTo(username)
		))).pipe(map(userSnapshot => {

			const queryResult = userSnapshot.val();
			return queryResult
				? Object.values(queryResult)[0] as User
				: null;
		}));
	}

	createUser$(username: string, password: string): Observable<DatabaseReference> {
		const usersRef = ref(this.database, 'users');
		return from(push(usersRef, {username, password}))
			.pipe(
				tap(userRef => console.log(`User [${username}] created with id ${userRef.key}`)),
			);
	}

	getAppInfo$(): Observable<AppInfo> {
		return objectVal<AppInfo>(ref(this.database, 'admin/app-info'));
	}
}
