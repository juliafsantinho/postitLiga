import { Component, OnInit } from '@angular/core';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Java',
      annotation: 'Paragraph porttitor libero a metus mollis, a condimentum enim dignissim. Phasellus feugiat risus in odio imperdiet, at convallis dolor venenatis. Ut eu interdum nulla. Orci varius natoque penatibus et magnis dis parturient montes,',
      color: PostItColorEnum.GREEN,
    },
    {
      id: 1,
      title: 'Como ter uma rotina programando',
      annotation: 'Paragraph porttitor libero a metus mollis, a condimentum enim dignissim. Phasellus feugiat risus in odio imperdiet, at convallis dolor venenatis. Ut eu interdum nulla. Orci varius natoque penatibus et magnis dis parturient montesr',
      color: PostItColorEnum.YELLOW,
    },
    {
      id: 2,
      title: 'Diferença entre Java e JavaScript',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostItColorEnum.RED,
    },
    {
      id: 3,
      title: 'Titulo do post 3',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostItColorEnum.PINK,
    },
    {
      id: 4,
      title: 'Titulo do post 4',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostItColorEnum.PURPLE,
    },
    {
      id: 5,
      title: 'Titulo do post 5',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostItColorEnum.RED,
    },
    {
      id: 6,
      title: 'Titulo do post 6',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender Lorem',
      color: PostItColorEnum.BLUE,
    },
    {
      id: 7,
      title: 'Titulo do post 7',
      annotation: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, itaque! Consectetur dolores praesentium reprehender',
      color: PostItColorEnum.GREEN,
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
