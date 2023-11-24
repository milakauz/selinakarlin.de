import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsList = [
    {
      imgSource: '../../assets/img/icons/0_angular.png',
      name: 'Angular'
    },
    {
      imgSource: '../../assets/img/icons/1_typescript.png',
      name: 'Typescript'
    },
    {
      imgSource: '../../assets/img/icons/2_javascript.png',
      name: 'JavaScript'
    },
    {
      imgSource: '../../assets/img/icons/3_html.png',
      name: 'HTML'
    },
    {
      imgSource: '../../assets/img/icons/4_css.png',
      name: 'CSS'
    },
    {
      imgSource: '../../assets/img/icons/5_firebase.png',
      name: 'Firebase'
    },
    {
      imgSource: '../../assets/img/icons/6_git.png',
      name: 'Git'
    },
    {
      imgSource: '../../assets/img/icons/7_api.png',
      name: 'Rest-Api'
    },
    {
      imgSource: '../../assets/img/icons/8_scrum.png',
      name: 'Scrum'
    },
    {
      imgSource: '../../assets/img/icons/9_materialDesin.png',
      name: 'Material Design'
    }
  ]
}
