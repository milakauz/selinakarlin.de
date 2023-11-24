import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialMediaList = [
    {
      imgSource: '../../assets/img/socials/gitHub.png', 
      url: 'https://github.com/milakauz',
    },
    {
      imgSource: '../../assets/img/socials/mail.png', 
      url: 'karlinselina@gmail.com',
    },
    {
      imgSource: '../../assets/img/socials/linkedIn.png', 
      url: 'https://www.linkedin.com/in/selinakarlin/',
    }
  ]
}
