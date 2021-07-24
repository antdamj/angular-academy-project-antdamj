import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthData } from '../interfaces/authdata.interface';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private storageService: StorageService) {}
	private authData: IAuthData | null = this.storageService.get('authdata');

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		// Q: should i copy request into a new request?

		if (this.authData) {
			request = request.clone({
				headers: new HttpHeaders({
					uid: this.authData.uid,
					'access-token': this.authData.token,
					client: this.authData.client,
				}),
			});
		}

		return next.handle(request);
	}
}
