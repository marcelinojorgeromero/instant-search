import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/mergeMap'; // flatMap is an alias of mergeMap
import 'rxjs/add/operator/switchMap'; // es casi igual que flatMap con la unica diferencia que hace unsubscribe del observable anterior

@Injectable()
export class WikipediaSearchService {

	constructor(private _jsonp: Jsonp) { }

	search (terms: Observable<string>, debounceMs = 500) {
		return terms
	      .debounceTime(500) // Para no realizar peticiones con cada keystroke
	      .distinctUntilChanged() // Realiza peticion solo cuando el string es diferente
	      // .flatMap(term => this._service.search(term)) // flatMap flattens observable of observable like SelectMany in LINQ
	      .switchMap(term => this.rawsearch(term)); // igual que flatMap. Elimina el problema de las respuestas que llegan sin orden
	}

	rawsearch (term: string) {
		let search = new URLSearchParams();
		search.set('action', 'opensearch');
		search.set('search', term);
		search.set('format', 'json');

		return this._jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
			.map(response => response.json()[1]);
	}
}
