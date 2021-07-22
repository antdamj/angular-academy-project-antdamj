import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import { IRegisterData } from './components/register/register.component';

@Component({
	selector: 'app-register-container',
	templateUrl: './register-container.component.html',
	styleUrls: ['./register-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainerComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {}

	public loading$: Subject<boolean> = new Subject<boolean>();

	ngOnInit(): void {}

	public onUserSignup(data: IRegisterData): void {
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
