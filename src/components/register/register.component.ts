import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface IRegisterForm {
	username: string;
	password: string;
	passwordRepeat: string;
}

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
	constructor(private fb: FormBuilder) {}

	public registerFormGroup: FormGroup = this.fb.group({
		email: [''], // TODO: add validators
		password: [''],
		passwordRepeat: [''],
	});

	ngOnInit(): void {}
}
