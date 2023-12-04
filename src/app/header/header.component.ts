import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router, private viewportScroller: ViewportScroller) { }
  isActivated = false;

  toggleMenu() {
    this.isActivated = !this.isActivated;
  }

  scrollToSection(id: string) {
    this.toggleMenu();
    this.viewportScroller.scrollToAnchor(id);
  }
}