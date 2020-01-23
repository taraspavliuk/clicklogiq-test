import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {PhotosService} from '../../services/photos-service/photos.service';
import {Photo} from './photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  form: FormGroup;
  photos$: Observable<Photo[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly photoService: PhotosService
  ) {
    this.form = fb.group({
      sortType: ['name']
    });

    this.photos$ = this.photoService.getPhotos();
  }

  ngOnInit() {
    this.photoService.fetchPhotos();
  }
}
