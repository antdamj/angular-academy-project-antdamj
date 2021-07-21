import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
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

	public onUserLogin(data: ILoginData): void {
		// console.log('in component:', data);
		this.authService.loginUser(data).subscribe(() => this.router.navigate(['']));
	}
}
