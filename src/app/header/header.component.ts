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
  language!: string;
  isActivated = false;
  
  constructor(public router: Router, private viewportScroller: ViewportScroller, public translate: TranslateService) { 
    this.language = 'en';
  }

  toggleMenu() {
    this.isActivated = !this.isActivated;
  }

  setGerman(){
    this.language = 'de';
  }

  setEnglish() {
    this.language = 'en';
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