import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  ngOnInit() {
    Aos.init({
      startEvent: 'scroll'
    });
  }

  redirectTo(link: string) {
    window.open(link, '_blank');
  }

  portfolioList = [
    {
      url: './assets/img/portfolio/dabubble.png',
      name: 'DABubble',
      techStack: 'Angular | TypeScript | Firebase | SCSS | Material Design',
      description: 'This chat messenger app is inspired by Slack and allows users to communicate with each other through channels or direct messages.',
      linkGithub: 'https://github.com/milakauz/dabubble',
      linkLive: 'https://dabubble.selinakarlin.de/'
    },
    {
      url: './assets/img/portfolio/join_00.png',
      name: 'Join',
      techStack: 'CSS | HTML | JavaScript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkGithub: 'https://github.com/milakauz/Join',
      linkLive: 'https://www.join.selinakarlin.de/index.html'
    },
    {
      url: './assets/img/portfolio/el_pollo_loco_00.png',
      name: 'El Pollo Loco',
      techStack: 'CSS | HTML | JavaScript | OOP',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and bottles to fight the endboss.',
      linkGithub: 'https://github.com/milakauz/elPolloLoco',
      linkLive: 'https://www.elpolloloco.selinakarlin.de/index.html',
    }
  ]
}


