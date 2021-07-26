import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShowsContainerComponent } from './all-shows-container.component';

describe('AllShowsContainerComponent', () => {
  let component: AllShowsContainerComponent;
  let fixture: ComponentFixture<AllShowsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllShowsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShowsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
