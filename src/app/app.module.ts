import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {FilesComponent} from './features/files/files.component';
import {SharingComponent} from './features/sharing/sharing.component';
import {LinksComponent} from './features/links/links.component';
import {EventsComponent} from './features/events/events.component';
import {TutorialComponent} from './features/tutorial/tutorial.component';
import {PhotosService} from './services/photos-service/photos.service';

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    SharingComponent,
    LinksComponent,
    EventsComponent,
    TutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [PhotosService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
