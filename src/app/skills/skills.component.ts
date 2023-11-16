import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsList = [
    {
      url: '../../assets/img/icons/0_angular.png',
      name: 'Angular'
    },
    {
      url: '../../assets/img/icons/1_typescript.png',
      name: 'Typescript'
    },
    {
      url: '../../assets/img/icons/2_javascript.png',
      name: 'JavaScript'
    },
    {
      url: '../../assets/img/icons/3_html.png',
      name: 'HTML'
    },
    {
      url: '../../assets/img/icons/4_css.png',
      name: 'CSS'
    },
    {
      url: '../../assets/img/icons/5_firebase.png',
      name: 'Firebase'
    },
    {
      url: '../../assets/img/icons/6_git.png',
      name: 'Git'
    },
    {
      url: '../../assets/img/icons/7_api.png',
      name: 'Rest-Api'
    },
    {
      url: '../../assets/img/icons/8_scrum.png',
      name: 'Scrum'
    },
    {
      url: '../../assets/img/icons/9_materialDesin.png',
      name: 'Material Design'
    }
  ]
}
