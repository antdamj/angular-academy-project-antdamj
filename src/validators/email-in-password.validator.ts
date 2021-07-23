import { FormControl, ValidationErrors } from '@angular/forms';

export function emailInPasswordValidator(control: FormControl): ValidationErrors | null {
	let emailReduced: string = '';
	if (control.get('email')?.value) emailReduced = control.get('email')?.value.split('@')[0];
	let password: string = control.get('password')?.value || '';

	// console.log('>>>', emailReduced, password);
	return password.includes(emailReduced) && emailReduced.length > 0
		? { mailPasswordRepeat: "Can't repeat yourself!" }
		: null;
}
