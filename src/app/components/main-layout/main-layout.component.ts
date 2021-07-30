import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Show } from 'src/app/services/show.model';

interface ILayout {
	isSmall: boolean;
}

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
	@Input() shows: Array<Show>;
	public layout$: Observable<ILayout>;

	constructor(breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) {
		this.layout$ = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}

	public logOut(): void {
		this.authService.logOut();
		this.router.navigate(['/login']);
	}
}
