import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { WikipediaSearchService } from './wikipedia-search.service';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.css']
})
export class WikipediaSearchComponent implements OnInit {
  items: Array<string>;
	term$ = new Subject<string>();

  constructor(private _service: WikipediaSearchService) {
		this.term$.subscribe(term => this.search(term));
	}

  ngOnInit() {
  }

  public search(term: string) {
    		this._service.search(term)
			    .subscribe(results => this.items = results);
	}
}
