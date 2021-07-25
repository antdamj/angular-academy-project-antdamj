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
		rating: ['', Validators.required],
		comment: ['', Validators.required],
	});

	public onAddReview(): void {
		const componentFactory = this.resolver.resolveComponentFactory(ShowReviewComponent);
		const viewContainerRef = this.vcref;

		const componentRef = viewContainerRef.createComponent<ShowReviewComponent>(componentFactory);
		componentRef.instance.review = {
			rating: this.addReviewFormGroup.get('rating')?.value,
			comment: this.addReviewFormGroup.get('comment')?.value,
			id: '',
			show_id: this.showId,
		};

		this.addReviewFormGroup.get('show_id')
			? this.addReviewFormGroup.patchValue({ show_id: parseInt(this.showId) })
			: this.addReviewFormGroup.addControl('show_id', new FormControl(parseInt(this.showId)));

		this.formData.emit(this.addReviewFormGroup.value);
		this.addReviewFormGroup.reset();
	}
}
