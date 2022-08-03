import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarEnum } from 'src/app/models/enums/navbar.enums';
import { NavbarItemInterface } from 'src/app/models/interfaces/navbar-item.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy{
  public navbarEnum: typeof NavbarEnum = NavbarEnum;
  public currentNavbar: NavbarEnum;
  public routeSubscription: Subscription;
  public navbarList: NavbarItemInterface[] = [
    {
      type: NavbarEnum.FEED,
      link: '/feed',
      icon:'../../../assets/images/perfil/Caminho 80.svg',
      iconActivated:'../../../assets/images/perfil/Icon ionic-ios-calendar.svg',
    },
    {
      type: NavbarEnum.HOME,
      link: '/home',
      icon:'../../../assets/images/perfil/Icon material-homevazio.svg',
      iconActivated:'../../../assets/images/perfil/Icon material-homecheio.svg',
    },
    {
      type: NavbarEnum.PROFILE,
      link: '/profile',
      icon:'../../../assets/images/perfil/navbar_profile_disabled.svg',
      iconActivated:'../../../assets/images/perfil/Icon awesome-user cheio.svg',
    }
  ];
  constructor(
    private readonly router: Router,
  ) {
    this.routeSubscription = router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((route: NavigationEnd) => {
      if (route.url.includes('/feed')) {
        this.currentNavbar = NavbarEnum.FEED;
      }
      if (route.url.includes('/home')) {
        this.currentNavbar = NavbarEnum.HOME;
      }
      if (route.url.includes('/profile')) {
        this.currentNavbar = NavbarEnum.PROFILE;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
