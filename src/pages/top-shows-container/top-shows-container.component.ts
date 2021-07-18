import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/services/show.model';
import { ShowService } from 'src/services/show.service';

@Component({
	selector: 'app-top-shows-container',
	templateUrl: './top-shows-container.component.html',
	styleUrls: ['./top-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopShowsContainerComponent implements OnInit {
	constructor(private showService: ShowService) {}

	public shows$: Observable<Array<Show>> = this.showService.topRated;
	public errorOccurred: boolean = false;

	ngOnInit() {
		this.shows$.subscribe((response) => {
			if (response.length === 0) {
				console.log('Error with data fetch.');
				this.errorOccurred = true;
			} else {
				console.log('Success.');
			}
		});
	}
}
