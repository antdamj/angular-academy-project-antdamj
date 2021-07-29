import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { IAuthData } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private storageService: StorageService) {}
	private authData: IAuthData | null = this.storageService.get('authdata');

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		let finalRequest: HttpRequest<unknown> = request;

		if (this.authData) {
			finalRequest = request.clone({
				headers: new HttpHeaders({
					uid: this.authData.uid,
					'access-token': this.authData.token,
					client: this.authData.client,
				}),
			});
		}

		return next.handle(finalRequest);
	}
}
