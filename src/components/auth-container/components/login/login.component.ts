import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface ILoginData {
	email: string;
	password: string;
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	constructor(private fb: FormBuilder) {}

	public loginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(8)]],
	});

	public loginAction() {
		console.log(this.loginFormGroup.value);
	}

	// @Output() -- ime funkcije

	ngOnInit(): void {}
}
