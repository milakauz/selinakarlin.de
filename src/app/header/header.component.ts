import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
    const currentUrl = this.router.url.split('/')[1];
    if (currentUrl !== '') {
      this.router.navigate(['/']).then(() => {
        this.viewportScroller.scrollToAnchor(id);
      });
    } else {
      this.viewportScroller.scrollToAnchor(id);
    }
  }

  // scrollToSection(id: string) {
  //   this.toggleMenu();
  //   this.viewportScroller.scrollToAnchor(id);
  // }
}