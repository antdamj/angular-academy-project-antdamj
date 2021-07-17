import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReviewsContainerComponent } from './show-reviews-container.component';

describe('ShowReviewsContainerComponent', () => {
  let component: ShowReviewsContainerComponent;
  let fixture: ComponentFixture<ShowReviewsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReviewsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReviewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
