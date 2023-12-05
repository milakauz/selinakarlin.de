import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  private scrollSubscription!: PushSubscription;
  title = 'selinakarlin.de';
  scrollY$!: Observable<number>;

  constructor(public translate: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('de');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY;
  }
}
