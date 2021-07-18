import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { flatMap, map, mergeMap, repeat, switchMap } from 'rxjs/operators';
import { Show } from 'src/services/show.model';
import { ShowService } from 'src/services/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent implements OnInit {
	constructor(private showService: ShowService) {}

	public shows$: Observable<Array<Show>> | undefined = this.showService.shows;
	public errorOccurred: boolean = false;

	ngOnInit() {
		this.shows$?.subscribe((response) => {
			if (response.length === 0) {
				console.log('Error with first data fetch.');
				this.shows$ = of([]);
				this.shows$ = this.showService.shows;
				this.shows$.subscribe((res2) => {
					if (res2.length === 0) {
						console.log('Error with second data fetch.');
					}
					this.errorOccurred = true;
				});
			} else {
				console.log('Data successfully fetched.', response);
			}
		});
	}
}
