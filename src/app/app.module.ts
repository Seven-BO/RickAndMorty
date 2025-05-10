import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractIdFromUrlPipe } from './extract-id-from-url.pipe';
import {LocationListComponent} from "./components/location-list/location-list.component";
import {LocationDetailComponent} from "./components/location-detail/location-detail.component";
import {EpisodeListComponent} from "./components/episode-list/episode-list.component";
import {EpisodeDetailComponent} from "./components/episode-detail/episode-detail.component";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {CharacterDetailComponent} from "./components/character-detail/character-detail.component";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    ExtractIdFromUrlPipe,
    LocationListComponent,
    LocationDetailComponent,
    EpisodeListComponent,
    EpisodeDetailComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
