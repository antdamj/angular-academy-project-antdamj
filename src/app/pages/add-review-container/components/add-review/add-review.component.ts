import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';

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
	constructor(private fb: FormBuilder) {}
	@Input() showId: string;
	@Output() formData: EventEmitter<IAddForm> = new EventEmitter();

	public addReviewFormGroup: FormGroup = this.fb.group({
		rating: ['', Validators.required],
		comment: ['', Validators.required],
	});

	public onAddReview(): void {
		this.addReviewFormGroup.addControl('show_id', new FormControl(parseInt(this.showId)));
		this.formData.emit(this.addReviewFormGroup.value);
		this.addReviewFormGroup.reset();
	}
}
