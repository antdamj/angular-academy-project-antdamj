import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ILoginData } from 'src/app/pages/login-container/components/login/login.component';
import { IRegisterData } from 'src/app/pages/register-container/components/register/register.component';
import { StorageService } from './storage.service';

export interface IAuthData {
	uid: string;
	token: string;
	client: string;
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(Boolean(this.getAuthData()));
	public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();

	constructor(private http: HttpClient, private storageService: StorageService) {}

	public loginUser(data: ILoginData): Observable<any> {
		return this.http
			.post<ILoginData>('https://tv-shows.infinum.academy/users/sign_in', data, { observe: 'response' })
			.pipe(
				tap((response: HttpResponse<any>) => {
					const uid: string | null = response.headers.get('uid');
					const token: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					if (uid && token && client) {
						this.saveAuthData({ uid, token, client });
						this._isLoggedIn$.next(true);
					}
				})
			);
	}

	public registerUser(data: IRegisterData): Observable<any> {
		return this.http.post<IRegisterData>('https://tv-shows.infinum.academy/users', data, { observe: 'response' }).pipe(
			tap((response: HttpResponse<any>) => {
				const uid: string | null = response.headers.get('uid');
				const token: string | null = response.headers.get('access-token');
				const client: string | null = response.headers.get('client');

				if (uid && token && client) {
					this.saveAuthData({ uid, token, client });
					this._isLoggedIn$.next(true);
				}
			})
		);
	}

	public getMe(): Observable<any> {
		return this.http.get<any>('https://tv-shows.infinum.academy/users/me').pipe(
			map((response) => {
				return response.user;
			})
		);
	}

	private saveAuthData(authData: IAuthData): void {
		this.storageService.add('authdata', authData);
	}

	private getAuthData(): IAuthData | null {
		return this.storageService.get('authdata');
	}

	public logOut(): void {
		this.storageService.remove('authdata');
		this._isLoggedIn$.next(false);
	}
}
