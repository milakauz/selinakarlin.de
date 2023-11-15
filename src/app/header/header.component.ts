import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActivated: boolean;
  links = document.getElementById('menuLinks');

  constructor(){
    this.isActivated = false;
    console.log(this.isActivated);
  }

  toggleMenu() {
    this.isActivated = !this.isActivated;
    console.log(this.isActivated);
  }

}
