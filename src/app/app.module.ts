import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

import { HomeModule } from './home/home.module';
import { WikipediaSearchModule } from './wikipedia-search/wikipedia-search.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		HomeModule,
		WikipediaSearchModule,
		routing
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
