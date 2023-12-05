import { Component, Inject } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router, private viewportScroller: ViewportScroller, public translate: TranslateService) { }
  isActivated = false;

  toggleMenu() {
    this.isActivated = !this.isActivated;
  }

  scrollToSection(id: string) {
    this.toggleMenu();
    this.viewportScroller.scrollToAnchor(id);
  }
}