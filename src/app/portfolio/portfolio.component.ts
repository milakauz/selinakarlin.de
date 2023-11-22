import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, QueryList, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import { WindowScrollService } from "./../services/window-scroll.service";
import { Subscription } from "rxjs";
// import { throttle } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('elementToAnimate') elementsToAnimate!: QueryList<ElementRef>;
  private scrollSubscription!: Subscription;
  public elementsPosition: { position: number; viewable: boolean }[] = [];

  constructor(private windowScrollService: WindowScrollService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.calculatePositions();

    this.scrollSubscription = this.windowScrollService.scrollY$.subscribe(scrollPosition => {
      this.checkPositions(scrollPosition);
    })
  }

  checkPositions(scrollPosition: number) {
    this.elementsPosition.forEach(element => {
      if (scrollPosition >= element.position) {
        console.log('Element ist im Viewport', element.position, element.viewable);
        element.viewable = true;
      } else if (scrollPosition <= element.position) {
        element.viewable = false;
        console.log('Element ist NICHT im Viewport', element.position, element.viewable);
      }
    });
  }

  calculatePositions() {
    this.elementsPosition = [];
    // iterates through DOM-Elements to get their y-positions to be pushed in global array
    this.elementsToAnimate.forEach((elementRef: ElementRef, index: number) => {
      const rect = elementRef.nativeElement.getBoundingClientRect();
      const posY = Math.round(rect.top + window.scrollY); // y position relative to document
      // this.elementsPosition.push(posY, false)
    })
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }


  portfolioList = [
    {
      url: '../../assets/img/portfolio/el_pollo_loco.png',
      name: 'El Pollo Loco',
      techStack: 'CSS | HTML | JavaScript',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and bottles to fight the endboss.',
      linkGithub: 'https://github.com/milakauz/elPolloLoco',
      // linkLive:'',
    },
    {
      url: '../../assets/img/portfolio/join.png',
      name: 'Join',
      techStack: 'CSS | HTML | JavaScript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkGithub: 'https://github.com/milakauz/Join',
      // linkLive:''
    }
  ]
}


