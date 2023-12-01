import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

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

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY;
  }
}
