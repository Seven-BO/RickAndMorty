import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterResolver } from './resolvers/character.resolver';
import { LocationResolver } from './resolvers/location.resolver';
import { EpisodeResolver } from './resolvers/episode.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharacterListComponent },
  { 
    path: 'characters/:id', 
    component: CharacterDetailComponent,
    resolve: {
      character: CharacterResolver
    }
  },
  { path: 'locations', component: LocationListComponent },
  { 
    path: 'locations/:id', 
    component: LocationDetailComponent,
    resolve: {
      location: LocationResolver
    }
  },
  { path: 'episodes', component: EpisodeListComponent },
  { 
    path: 'episodes/:id', 
    component: EpisodeDetailComponent,
    resolve: {
      episode: EpisodeResolver
    }
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }