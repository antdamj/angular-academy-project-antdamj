import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { ILoginData } from 'src/pages/login-container/components/login/login.component';
import { IRegisterData } from 'src/pages/register-container/components/register/register.component';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	public registerUser(data: IRegisterData): Observable<IRegisterData> {
		console.log('Na server ide:', data);
		return this.http.post<IRegisterData>(' https://tv-shows.infinum.academy/users', data);
	}

	public loginUser(data: ILoginData): Observable<ILoginData> {
		return this.http.post<ILoginData>('https://tv-shows.infinum.academy/users/sign_in', data);
	}
}
