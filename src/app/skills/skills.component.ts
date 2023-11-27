import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsList = [
    {
      imgSource: '../../assets/img/icons/0_angular.svg',
      name: 'Angular'
    },
    {
      imgSource: '../../assets/img/icons/1_typescript.svg',
      name: 'Typescript'
    },
    {
      imgSource: '../../assets/img/icons/2_javascript.svg',
      name: 'JavaScript'
    },
    {
      imgSource: '../../assets/img/icons/3_html.svg',
      name: 'HTML'
    },
    {
      imgSource: '../../assets/img/icons/4_css.svg',
      name: 'CSS'
    },
    {
      imgSource: '../../assets/img/icons/5_firebase.svg',
      name: 'Firebase'
    },
    {
      imgSource: '../../assets/img/icons/6_git.svg',
      name: 'Git'
    },
    {
      imgSource: '../../assets/img/icons/7_api.svg',
      name: 'Rest-Api'
    },
    {
      imgSource: '../../assets/img/icons/8_scrum.svg',
      name: 'Scrum'
    },
    {
      imgSource: '../../assets/img/icons/9_materialDesin.svg',
      name: 'Material Design'
    }
  ]
}
