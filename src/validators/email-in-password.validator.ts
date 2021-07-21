import { FormControl, ValidationErrors } from '@angular/forms';

export function emailInPasswordValidator(control: FormControl): ValidationErrors | null {
	const emailReduced: string = control.get('email')?.value.split('@')[0] || '';
	const password: string = control.get('password')?.value || '';

	// console.log('>>>', emailReduced, password);
	return password.includes(emailReduced) && emailReduced.length > 0
		? { mailPasswordRepeat: "Can't repeat yourself!" }
		: null;
}
