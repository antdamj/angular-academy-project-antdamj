import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Show } from 'src/services/show.model';
import { ShowService } from 'src/services/show.service';

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent implements OnInit {
	constructor(private route: ActivatedRoute, private showService: ShowService) {}

	public show$: Observable<Show | undefined>;

	ngOnInit(): void {
		const id: string | null = this.route.snapshot.paramMap.get('id');

		if (id) {
			this.show$ = this.showService.getshowById(id);
		}
	}
}
