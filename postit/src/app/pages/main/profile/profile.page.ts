import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { FeedPostItProxy } from 'src/app/models/proxies/feed-postit.proxy';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import { UserProxy } from 'src/app/models/proxies/user.proxy';
import { HelperService } from 'src/app/services/helper.services';
import { NoteService } from 'src/app/services/note.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {


  constructor(
    private router: Router,
    private readonly noteService: NoteService,
    private readonly helper: HelperService,
  ) { }


  @Input()
  public myPostits: PostItProxy[] = [];

  public isSettingsEnabled: boolean = false;

  public myUser: UserProxy;

  public loading: boolean = false;

  public post: FeedPostItProxy[];


  public async ionViewDidEnter(): Promise<void> {
    this.loading = true;
    const [note, message] = await this.noteService.getMyFeedNotes();

    // TODO: IMPLEMENTAR GETME
    const success = JSON.parse(localStorage.getItem(environment.keys.user));
    this.loading = false;

    if (!success) {
      this.helper.showToast('Erro ao carregar usuário.')
    }

    if (!note) {
      return void this.helper.showToast(message);
    }

    this.post = note;
    this.myUser = success;
  }

  public async clickConfigList(index: 0 | 1 | 2 | 3): Promise<void> {
    switch (index) {
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        localStorage.clear();
        await this.router.navigate(['/login']);
        break;
      }
    }
  }


}