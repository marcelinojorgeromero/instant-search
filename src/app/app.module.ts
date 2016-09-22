import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';
import { WikipediaSearchService }   from './wikipedia-search/wikipedia-search.service';

import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaSearchComponent,
    HelloComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    WikipediaSearchService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
