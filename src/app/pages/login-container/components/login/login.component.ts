import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { validEmail } from 'src/app/validators/valid-email.validator';

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
export class LoginComponent {
	constructor(private fb: FormBuilder) {}

	@Input() loading$: Subject<boolean>;
	@Output() loginUser: EventEmitter<ILoginData> = new EventEmitter();

	public loginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required, validEmail]],
		password: ['', [Validators.required, Validators.minLength(8)]],
	});

	public loginAction() {
		this.loginUser.emit(this.loginFormGroup.value);
		this.loginFormGroup.reset();
	}
}
