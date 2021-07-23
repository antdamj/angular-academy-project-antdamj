import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailInPasswordValidator } from 'src/validators/email-in-password.validator';
import { matchingPasswords } from 'src/validators/matching-passwords.validator';
import { validEmail } from 'src/validators/valid-email.validator';

export interface IRegisterData {
	username: string;
	password: string;
	password_confirmation: string;
}

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
	constructor(private fb: FormBuilder) {}

	@Output() registerUser: EventEmitter<IRegisterData> = new EventEmitter();

	public registerFormGroup: FormGroup = this.fb.group(
		{
			email: ['', [Validators.required, validEmail]],
			password: [
				'',
				[
					(Validators.required, Validators.minLength(8)),
					Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*'),
				],
			],
			password_confirmation: ['', [Validators.required]],
		},
		{ validator: [emailInPasswordValidator, matchingPasswords] }
	);

	public signupAction() {
		console.log(this.registerFormGroup.value);
		this.registerUser.emit(this.registerFormGroup.value);
		this.registerFormGroup.reset();
	}
}
