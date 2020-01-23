import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilesComponent} from './features/files/files.component';
import {SharingComponent} from './features/sharing/sharing.component';
import {LinksComponent} from './features/links/links.component';
import {EventsComponent} from './features/events/events.component';
import {TutorialComponent} from './features/tutorial/tutorial.component';


const routes: Routes = [
  {path: '', redirectTo: 'photos', pathMatch: 'full'},
  {path: 'files', component: FilesComponent},
  {path: 'photos', loadChildren: './features/photos/photos.module#PhotosModule'},
  {path: 'sharing', component: SharingComponent},
  {path: 'links', component: LinksComponent},
  {path: 'events', component: EventsComponent},
  {path: 'tutorial', component: TutorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
