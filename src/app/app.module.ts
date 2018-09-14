import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroService } from './heroes/shared/hero.service';
import { MessageService } from './messages/shared/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroComponent,
		MessagesComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
