import {Component, Input} from '@angular/core';
import {Photo} from '../../photos.model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent {
  @Input() item: Photo;
  isSelect = false;

  constructor() {
  }
}
