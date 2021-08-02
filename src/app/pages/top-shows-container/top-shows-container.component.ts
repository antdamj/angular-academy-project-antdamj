import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
	selector: 'app-top-shows-container',
	templateUrl: './top-shows-container.component.html',
	styleUrls: ['./top-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopShowsContainerComponent {
	constructor(private showService: ShowService) {}

	public shows$: Observable<Array<Show>> = this.showService.topRated();
}
