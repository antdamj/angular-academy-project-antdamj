import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { IRegisterData } from './components/register/register.component';

@Component({
	selector: 'app-register-container',
	templateUrl: './register-container.component.html',
	styleUrls: ['./register-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainerComponent {
	public loading$: Subject<boolean> = new Subject<boolean>();

	constructor(private authService: AuthService, private router: Router) {}

	public onUserSignup(data: IRegisterData): void {
		this.loading$.next(true);
		this.authService
			.registerUser(data)
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
