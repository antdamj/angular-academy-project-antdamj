import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.component.html',
  styleUrls: ['./authentication-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
