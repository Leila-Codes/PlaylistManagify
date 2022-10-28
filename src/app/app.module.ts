import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserInfoComponent } from './user-info/user-info.component';
import { SpotifyInterceptor } from './spotify.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PlaylistSearchComponent } from './playlist-search/playlist-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaylistPanelComponent } from './playlist-panel/playlist-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    LoginComponent,
    MainComponent,
    PlaylistSearchComponent,
    PlaylistPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpotifyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
