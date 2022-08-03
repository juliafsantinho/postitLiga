import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.scss'],
})
export class PostitComponent {
  
  @Input()
  public postIt: PostItProxy;

  @Output()
  public postItSelected: EventEmitter<PostItProxy> = new EventEmitter<PostItProxy>();

  constructor() { }

  public emitPost(): void {
    this.postItSelected.emit(this.postIt)
  }

}