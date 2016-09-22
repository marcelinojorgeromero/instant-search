import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaSearchComponent }   from './wikipedia-search.component';
import { WikipediaSearchService }   from './wikipedia-search.service';

@NgModule({
	imports: [CommonModule],
	exports: [WikipediaSearchComponent],
	declarations: [WikipediaSearchComponent],
	providers: [WikipediaSearchService],
})
export class WikipediaSearchModule { }
