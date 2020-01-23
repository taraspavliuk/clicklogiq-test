import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../photos.model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {
  @Input() item: Photo;
  isSelect = false;

  constructor() {
  }

  ngOnInit() {
  }

}
