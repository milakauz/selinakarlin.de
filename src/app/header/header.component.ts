import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActivated = false;
  linkAnimationActive: boolean = false;
  links = document.getElementById('menuLinks');

  constructor(public router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isActivated = !this.isActivated;
    // if (this.isActivated) {
    //   document.body.classList.add('no-scroll');
    //   this.links?.classList.add('no-scroll')
    // } else {
    //   document.body.classList.remove('no-scroll');
    // }
    // console.log(this.isActivated);
  }

  clickControl(id: string) {
    this.linkAnimationActive = true;
    setTimeout(() => {
      this.toggleMenu();
    }, 1200);

    // debugger;
    setTimeout(() => {
      this.scrollToSection(id);
      this.linkAnimationActive = false;
    }, 1500);
  }

  scrollToSection(id: string) {
    // this.isActivated = false;
    // document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.viewportScroller.scrollToAnchor(id);
  }
}