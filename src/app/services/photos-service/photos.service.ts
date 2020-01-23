import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {Photo} from '../../features/photos/photos.model';

@Injectable()
export class PhotosService {
  private photos$ = new BehaviorSubject<Photo[]>([]);

  constructor(private http: HttpClient) {
  }

  fetchPhotos(): Observable<Photo[]> {
    this.http.get<Photo[]>('./assets/api/photos-data.json')
      .subscribe((res) => {
        this.photos$.next(res);
      });

    return this.getPhotos();
  }

  getPhotos() {
    return this.photos$.pipe(share());
  }

  getUsedSize() {
    return this.getPhotos().pipe(
      map((photos) =>
        photos.reduce(
          (size, photo) => size + photo.size,
          0
        )
      ),
      share(),
    );
  }

  getStorageSize() {
    return of(10 * Math.pow(2, 30)); // 10 GB in bytes);
  }

}
