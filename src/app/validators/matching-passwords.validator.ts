import { FormControl, ValidationErrors } from '@angular/forms';

export function matchingPasswords(control: FormControl): ValidationErrors | null {
	const password: string = control.get('password')?.value || '';
	const passwordConfirmation: string = control.get('password_confirmation')?.value || '';
	return password === passwordConfirmation ? null : { passwordMismatch: 'Passwords must match!' };
}
