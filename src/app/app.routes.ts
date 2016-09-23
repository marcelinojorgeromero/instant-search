import { ModuleWithProviders } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';

const fallbackRoute: Route = {
		path: '**',
		component: HomeComponent
};

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'wiki-search',
		component: WikipediaSearchComponent
	},
	fallbackRoute
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
