import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActivated = false;
  links = document.getElementById('menuLinks');

  constructor(public router: Router, private viewportScroller: ViewportScroller) { }

  toggleMenu() {
    const HTMLbody = document.querySelector('body');
    this.isActivated = !this.isActivated;
    console.log(this.isActivated);
    if (HTMLbody && this.isActivated) {
      HTMLbody.style.overflowY = 'hidden';
      // HTMLbody.classList.add('no-scroll');
      console.log('Container existiert!');
    } else if (HTMLbody && !this.isActivated) {
      HTMLbody.style.overflowY = 'auto'
      // HTMLbody.classList.remove('no-scroll')
    }
  }

  scrollToSection(id: string) {
    this.isActivated = false;
    this.viewportScroller.scrollToAnchor(id);
  }

}