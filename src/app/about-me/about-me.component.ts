import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller){}

  
  /**
   * Scrolls to the anchor with the specified id-
   *
   * @param {string} id
   */
  scrollToSection(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
