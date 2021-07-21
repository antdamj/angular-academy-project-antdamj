import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
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

	ngOnInit(): void {}

	public onUserSignup(data: IRegisterData): void {
		this.authService.registerUser(data).subscribe(() => this.router.navigate(['']));
	}
}
