import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import { ILoginData } from './components/login/login.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
	constructor(private router: Router, private authService: AuthService, public snackBar: MatSnackBar) {}

	private errorMessage: string;

	public loading$: Subject<boolean> = new Subject<boolean>();

	public onUserLogin(data: ILoginData): void {
		this.loading$.next(true);
		this.authService
			.loginUser(data)
			.pipe(
				finalize(() => {
					this.loading$.next(false);
				}),
				catchError((err) => {
					this.errorMessage = err.error.errors[0]; // error message from server response
					return of({ undefined });
				})
			)
			.subscribe((response) => {
				if (!('undefined' in response)) {
					console.log('Server response:', response);
					this.router.navigate(['']);
				} else {
					this.snackBar.open(this.errorMessage, 'OK');
				}
			});
	}
}
