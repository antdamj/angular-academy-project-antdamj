import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AllShowsContainerComponent } from './all-shows-container/all-shows-container.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowCardComponent } from './show-card/show-card.component';

@NgModule({
	declarations: [AppComponent, MainLayoutComponent, SidenavComponent, AllShowsContainerComponent, ShowListComponent, ShowCardComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
