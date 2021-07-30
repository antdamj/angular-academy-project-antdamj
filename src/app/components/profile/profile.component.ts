import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
	constructor(private authService: AuthService) {}

	public userData$ = this.authService.getMe().pipe(map((res) => res));

	public processChange(form: any) {
		const files = form.files;
		console.log(files);
	}
}
