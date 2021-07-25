import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarInputComponent } from './star-input.component';

describe('StarInputComponent', () => {
  let component: StarInputComponent;
  let fixture: ComponentFixture<StarInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
