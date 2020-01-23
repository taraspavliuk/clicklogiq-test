import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PhotosComponent} from './photos.component';
import {PhotosRoutingModule} from './photos-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {NgxFilesizeModule} from 'ngx-filesize';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotosControlbarComponent } from './components/photos-controlbar/photos-controlbar.component';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoItemComponent,
    PhotosControlbarComponent,
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxFilesizeModule
  ]
})
export class PhotosModule {
}
