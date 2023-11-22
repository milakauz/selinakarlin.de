import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { WindowScrollService } from './services/window-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  private scrollSubscription!: PushSubscription;
  constructor(private windowScrollService: WindowScrollService) { //why private not public?
    this.scrollY$ = this.windowScrollService.scrollY$;
  }
  title = 'selinakarlin.de';
  scrollY$!: Observable<number>;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY;
    // console.log('position:', Math.round(scrollPosition));
    this.windowScrollService.updateScrollY(Math.round(scrollPosition));
  }

  // getYPosition(e: Event): number {
  //   return (e.target as Element).scrollTop;
  // }
}
