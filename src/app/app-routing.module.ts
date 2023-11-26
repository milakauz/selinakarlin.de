import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent}, 
  { path: 'legal-notice', component: LegalNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
