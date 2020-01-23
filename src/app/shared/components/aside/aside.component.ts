import {Component} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PhotosService} from '../../../services/photos-service/photos.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  storageSize$: Observable<number>;
  usedSize$: Observable<number>;
  usedPercent$: Observable<number>;

  constructor(private readonly photoService: PhotosService) {
    this.storageSize$ = this.photoService.getStorageSize();
    this.usedSize$ = this.photoService.getUsedSize();
    this.usedPercent$ = combineLatest([this.usedSize$, this.storageSize$]).pipe(
      map(([used, storage]) => 100 * used / storage)
    );
  }

}
