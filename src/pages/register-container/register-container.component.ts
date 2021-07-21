import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
