import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller){}
  scrollToSection(id: string){
    this.viewportScroller.scrollToAnchor(id);
  }
}
