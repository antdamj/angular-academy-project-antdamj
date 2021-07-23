import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopShowsContainerComponent } from './top-shows-container.component';

describe('TopShowsContainerComponent', () => {
  let component: TopShowsContainerComponent;
  let fixture: ComponentFixture<TopShowsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopShowsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopShowsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
