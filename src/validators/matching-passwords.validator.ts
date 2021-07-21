import { FormControl, ValidationErrors } from '@angular/forms';

export function matchingPasswords(control: FormControl): ValidationErrors | null {
	const pass1: string = control.get('password')?.value || '';
	const pass2: string = control.get('confirm_password')?.value || '';
	return pass1 === pass2 ? null : { passwordMismatch: 'Passwords must match!' };
}
