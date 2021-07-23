import { FormControl, ValidationErrors } from '@angular/forms';

export function validEmail(control: FormControl): ValidationErrors | null {
	const email: string = control.value || '';
	let valid: boolean = email.split('@').length === 2 && email.split('.').length > 1;

	if (valid) {
		email.split('@').forEach((part) => {
			if (part.length === 0) valid = false;
		});
	}
	if (valid) {
		email.split('.').forEach((part) => {
			if (part.length === 0) valid = false;
		});
	}

	return valid ? null : { invalidEmail: 'This email is invalid!' };
}
