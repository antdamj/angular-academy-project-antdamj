import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsCardComponent } from './show-details-card.component';

describe('ShowDetailsCardComponent', () => {
  let component: ShowDetailsCardComponent;
  let fixture: ComponentFixture<ShowDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
