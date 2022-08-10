import { FeedItemModule } from './../../../components/feed-item/feed-item.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { NgModule } from '@angular/core';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    FeedItemModule,
    
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}