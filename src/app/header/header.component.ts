import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router, private viewportScroller: ViewportScroller) { }
  isActivated = false;
  animationStatus: { [key: string]: boolean } = {
    aboutMe: false,
    skillsSection: false,
    portfolioSection: false
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isActivated = !this.isActivated;
  }

  clickControl(id: string) {
    setTimeout(() => {
      this.router.navigate(['/']).then(() => {
        this.scrollToSection(id);
        this.toggleMenu();

      })
    }, 1500);

    Object.keys(this.animationStatus).forEach(key => {
      this.animationStatus[key] = false;
    })

    if (this.animationStatus.hasOwnProperty(id)) {
      this.animationStatus[id] = true;
      setTimeout(() => {
        this.animationStatus[id] = false;
      }, 2000);
    }
  }

  scrollToSection(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}