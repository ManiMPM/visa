import { Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header.section.component.html',
  styleUrls: ['./header.section.component.css']
})
export class HeaderSectionComponent {
  navigate: boolean = false;
  animateDistance: string;
  selectedItemIndex: number;
  mobileViewMenu: boolean = false;
  constructor() {

  }


  openMenu(): void {
    this.mobileViewMenu = !this.mobileViewMenu;
  }

  navigateMenuItem(e, ind): void {
    this.navigate = true;
    this.selectedItemIndex = ind;
    const menuNode = document.getElementsByClassName('visa-menu-list')[0];
    const menuNodeOffset = menuNode.getBoundingClientRect();
    const elOffset = e.target.getBoundingClientRect();
    this.animateDistance = (elOffset['x'] - menuNodeOffset['x']) + elOffset['width'] / 2 - 20 + 'px';
  }
}
