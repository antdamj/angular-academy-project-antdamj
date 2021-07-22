import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReviewListComponent } from './show-review-list.component';

describe('ShowReviewListComponent', () => {
  let component: ShowReviewListComponent;
  let fixture: ComponentFixture<ShowReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
