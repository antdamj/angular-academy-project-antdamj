import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { emailInPasswordValidator } from 'src/app/validators/email-in-password.validator';
import { matchingPasswords } from 'src/app/validators/matching-passwords.validator';
import { validEmail } from 'src/app/validators/valid-email.validator';

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

	@Input() loading$: Subject<boolean>;
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
		this.registerUser.emit(this.registerFormGroup.value);
		this.registerFormGroup.reset();
	}
}
