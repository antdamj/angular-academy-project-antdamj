import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-shows-container',
  templateUrl: './top-shows-container.component.html',
  styleUrls: ['./top-shows-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopShowsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
