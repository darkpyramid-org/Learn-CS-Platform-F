import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ArticlesListComponent } from './features/articles/articles-list/articles-list.component';
import { ArticleDetailComponent } from './features/articles/article-detail/article-detail.component';
import { CategoryDetailComponent } from './features/categories/category-detail/category-detail.component';
import { PharaohsListComponent } from './features/pharaohs/pharaohs-list/pharaohs-list.component';
import { PharaohDetailComponent } from './features/pharaohs/pharaoh-detail/pharaoh-detail.component';
import { SitesListComponent } from './features/sites/sites-list/sites-list.component';
import { SiteDetailComponent } from './features/sites/site-detail/site-detail.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { SearchComponent } from './features/search/search.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Manetho — Ancient Egypt, History, Archaeology & Mythology'
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Search — Manetho'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About — Manetho'
  },
  {
    path: 'articles',
    component: ArticlesListComponent,
    title: 'Articles — Manetho'
  },
  {
    path: 'articles/:slug',
    component: ArticleDetailComponent
  },
  {
    path: 'categories/:slug',
    component: CategoryDetailComponent
  },
  {
    path: 'pharaohs',
    component: PharaohsListComponent,
    title: 'The Pharaohs — Manetho'
  },
  {
    path: 'pharaohs/:slug',
    component: PharaohDetailComponent
  },
  {
    path: 'sites',
    component: SitesListComponent,
    title: 'Archaeological Sites — Manetho'
  },
  {
    path: 'sites/:slug',
    component: SiteDetailComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    title: 'Timeline — Manetho'
  },
  {
    path: '**',
    redirectTo: ''
  },
];
