import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActivated = false;
  links = document.getElementById('menuLinks');

  constructor(public router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isActivated = !this.isActivated;
    console.log(this.isActivated);
  }
}