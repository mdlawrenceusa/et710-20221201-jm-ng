import { Component } from '@angular/core';

import { members } from '../team';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  members = members;



}
