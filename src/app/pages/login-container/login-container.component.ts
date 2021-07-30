import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ILoginData } from './components/login/login.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
	constructor(private router: Router, private authService: AuthService, public snackBar: MatSnackBar) {}

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
					this.snackBar.open(err.error.errors[0], 'OK');
					return throwError('Error!');
				})
			)
			.subscribe((response) => {
				console.log('Server response:', response);
				this.router.navigate(['']);
			});
	}
}
