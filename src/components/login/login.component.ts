import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
		email: [''], // TODO: add validators
		password: [''],
	});

	// @Output()

	ngOnInit(): void {}
}
