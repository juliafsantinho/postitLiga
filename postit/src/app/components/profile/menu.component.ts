import { Component, Input, OnInit } from '@angular/core';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';


@Component({
  selector: 'app-profile-item',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class ProfileItemComponent implements OnInit {
  @Input()
  public postit: PostItProxy;

  constructor() { }

  ngOnInit() {}

}