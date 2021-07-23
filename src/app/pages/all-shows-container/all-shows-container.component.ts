import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	constructor(private showService: ShowService) {}
	public errorOccurred$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	public shows$: Observable<Array<Show> | null> = this.showService.getShows().pipe(
		map((shows) => {
			return shows;
		}),
		catchError(() => {
			this.errorOccurred$.next(true);
			return of(null);
		})
	);
}
