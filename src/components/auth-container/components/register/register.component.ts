import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailInPasswordValidator } from 'src/validators/email-in-password.validator';
import { matchingPasswords } from 'src/validators/matching-passwords.validator';
import { passwordCharacters } from 'src/validators/password-characters.validator';

export interface IRegisterForm {
	username: string;
	password: string;
	confirm_password: string;
}

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
	constructor(private fb: FormBuilder) {}

	public registerFormGroup: FormGroup = this.fb.group(
		{
			email: ['', [Validators.required, Validators.email]],
			password: ['', [(Validators.required, Validators.minLength(8)), passwordCharacters]],
			confirm_password: ['', [Validators.required]],
		},
		{ validator: [emailInPasswordValidator, matchingPasswords] }
	);

	public signupAction() {
		console.log(this.registerFormGroup.value);
	}

	ngOnInit(): void {}
}
