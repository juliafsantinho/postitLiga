import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItPayload } from 'src/app/models/payload/postit.payload';


@Component({
  selector: 'app-postit-modal',
  templateUrl: './postit-modal.component.html',
  styleUrls: ['./postit-modal.component.scss'],
})
export class PostitModalComponent implements OnInit {
  @Input()
  public color: PostItColorEnum;

  @Input()
  public create: boolean;

  @Input()
  public postit: PostItPayload = {
    id: 6,
    title: '',
    annotation: '',
    color: PostItColorEnum.BLUE,
  };

  constructor(public readonly modalController: ModalController) {}

  ngOnInit() {
    if (!this.color) {
      this.color = this.postit.color;
    }
  }

  public savePostit(): void {
    this.postit.color = this.color;
    this.modalController.dismiss({ postit: this.postit });
  }

  public deletePostit(): void {
    this.modalController.dismiss({ postit: this.postit, isDeleted: true });
  }

  public closeModal(): void {
    this.modalController.dismiss({ isDeleted: false });
  }
}