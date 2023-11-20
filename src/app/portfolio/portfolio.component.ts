import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
// import { throttle } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkAnimationStatus();
  }

  private checkAnimationStatus() {

  }

  // plural because it's more than one element 
  @ViewChildren('elementToAnimate') animationElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.animationElements.forEach((e:ElementRef, index:number) => {
      const element = e.nativeElement;
      let i = index;
      console.log(element, i);
      
      // const i = element.get(index);
      // console.log(i);
      
      // console.log(e.get(index), index);
      // console.log(index);
    })
      console.log('query:', this.animationElements);
      // console.log('index?:', this.animationElements.get(index:number));
      
    //   if (this.animationElements) {
    //     this.animationElements.forEach((ref:ElementRef, index:number) => {
    //      const element = ref.nativeElement;
    //      const elementPosition = element.getBoundingClientRect();
    //     console.log(index, element, elementPosition);
        
    //    });
    //    // const element = this.animationElements.nativeElement.getBoundingClientRect();
    //    // console.log(element);
    //    // this.inFocus = true;
    //  }
  }

  constructor() {
    this.portfolioList.forEach(() => this.animateVisibility.push(false));
    // this.checkAnimationStatus = throttle(this.checkAnimationStatus.bind(this), 100);
  }
  animateVisibility: boolean[] = [];
  inFocus = false;
  portfolioList = [
    {
      url: '../../assets/img/portfolio/el_pollo_loco.png',
      name: 'El Pollo Loco',
      teckStack: 'CSS | HTML | JavaScript',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and bottles to fight the endboss.',
      linkGithub: 'https://github.com/milakauz/elPolloLoco',
      // linkLive:'',
    },
    {
      url: '../../assets/img/portfolio/join.png',
      name: 'Join',
      teckStack: 'CSS | HTML | JavaScript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkGithub: 'https://github.com/milakauz/Join',
      // linkLive:''
    }
  ]
}
