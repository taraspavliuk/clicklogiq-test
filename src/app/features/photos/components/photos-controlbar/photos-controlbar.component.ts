import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-photos-controlbar',
  templateUrl: './photos-controlbar.component.html',
  styleUrls: ['./photos-controlbar.component.scss']
})
export class PhotosControlbarComponent {
  @Input() form: FormGroup;

  constructor() {
  }

}
