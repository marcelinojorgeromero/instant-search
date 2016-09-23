/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Jsonp } from '@angular/http';

import { WikipediaSearchComponent } from './wikipedia-search.component';
import { WikipediaSearchService } from './wikipedia-search.service';


describe('Component: WikipediaSearch', () => {
	it('should create an instance', inject([WikipediaSearchService], (service) => {
		let component = new WikipediaSearchComponent(service.get());
		expect(component).toBeTruthy();
	}));
});
