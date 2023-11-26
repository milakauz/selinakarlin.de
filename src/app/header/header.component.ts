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
  }

  clickControl(id: string) {
    this.linkAnimationActive = true;
    setTimeout(() => {
      this.toggleMenu();
    }, 1200);

    setTimeout(() => {
      this.router.navigate(['/']).then(() => {
        this.scrollToSection(id);
      })
      this.linkAnimationActive = false;
    }, 1500);
  }

  scrollToSection(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}