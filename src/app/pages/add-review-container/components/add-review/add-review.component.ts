import {
	Component,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
	ComponentFactoryResolver,
	ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowReviewComponent } from 'src/app/pages/show-details-container/components/show-details-card/components/show-review/show-review.component';

export interface IAddForm {
	rating: number;
	comment: string;
	show_id: number;
}

@Component({
	selector: 'app-add-review',
	templateUrl: './add-review.component.html',
	styleUrls: ['./add-review.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReviewComponent {
	constructor(private fb: FormBuilder, private resolver: ComponentFactoryResolver, private vcref: ViewContainerRef) {}
	@Input() showId: string;
	@Output() formData: EventEmitter<IAddForm> = new EventEmitter();

	public addReviewFormGroup: FormGroup = this.fb.group({
		comment: ['', Validators.required],
	});

	private rating: number = 3;
	public stars: boolean[] = [true, true, true, false, false]; // default rating to 3
	public rate(rating: number) {
		this.stars = this.stars.map((_, i) => rating > i);
		this.rating = rating;
	}

	public onAddReview(): void {
		const componentFactory = this.resolver.resolveComponentFactory(ShowReviewComponent);
		const viewContainerRef = this.vcref;

		const componentRef = viewContainerRef.createComponent<ShowReviewComponent>(componentFactory);

		componentRef.instance.review = {
			comment: this.addReviewFormGroup.get('comment')?.value,
			rating: this.rating,
			show_id: this.showId,
			id: '',
		};

		let outValue = {
			comment: this.addReviewFormGroup.get('comment')?.value,
			rating: this.rating,
			show_id: parseInt(this.showId),
		};

		this.formData.emit(outValue);
		this.addReviewFormGroup.reset();
	}
}
