import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginData } from 'src/pages/login-container/components/login/login.component';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	public registerUser(): void {
		// make registration req
	}

	public loginUser(data: ILoginData): Observable<ILoginData> {
		return this.http.post<ILoginData>('https://tv-shows.infinum.academy/users/sign_in', data);
	}
}
