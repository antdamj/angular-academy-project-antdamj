import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsContainerComponent } from './show-details-container.component';

describe('ShowDetailsContainerComponent', () => {
  let component: ShowDetailsContainerComponent;
  let fixture: ComponentFixture<ShowDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
