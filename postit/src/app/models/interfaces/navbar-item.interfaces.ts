import { NavbarEnum } from "../enums/navbar.enums";

export interface NavbarItemInterface {
  type: NavbarEnum;
  link: string;
  icon: string;
  iconActivated: string;
}