import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
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

        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(id);
        }, 400);

      });
      
    } else {
      this.viewportScroller.scrollToAnchor(id);
    }
  }
}