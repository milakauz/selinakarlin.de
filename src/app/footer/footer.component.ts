import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  onPageLegalNotice: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        this.onPageLegalNotice = this.router.url === '/legal-notice';
      }
    });
  }
  
  socialMediaList = [
    {
      name: 'gitHub',
      imgSource: './assets/img/socials/gitHub.png', 
      url: 'https://github.com/milakauz',
    },
    {
      name: 'mail',
      imgSource: './assets/img/socials/mail.png', 
      url: 'hello@selinakarlin.de',
    },
    {
      name: 'linkedIn',
      imgSource: './assets/img/socials/linkedIn.png', 
      url: 'https://www.linkedin.com/in/selinakarlin/',
    }
  ]
}
