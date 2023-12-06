import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

const routes: Routes = [
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }