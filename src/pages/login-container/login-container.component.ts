import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import { ILoginData } from './components/login/login.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
	constructor(private router: Router, private authService: AuthService) {}

	public loading$: Subject<boolean> = new Subject<boolean>();

	public onUserLogin(data: ILoginData): void {
		this.loading$.next(true);
		this.authService
			.loginUser(data)
			.pipe(
				finalize(() => {
					this.loading$.next(false);
				})
			)
			.subscribe((response) => {
				console.log('Server response:', response);
				this.router.navigate(['']);
			});
	}
}
