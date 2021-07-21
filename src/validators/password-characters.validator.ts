import { FormControl, ValidationErrors } from '@angular/forms';

export function passwordCharacters(control: FormControl): ValidationErrors | null {
	const password: string = control.value || '';
	const r = new RegExp('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])');
	// console.log(r.test(password));
	return r.test(password) ? null : { mismatch: 'Password must contain..' };
}
