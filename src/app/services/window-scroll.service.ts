import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {
  // sends value to all subscribers
  scrollY = new BehaviorSubject(0);
  // creates observable to be subsribed but not changed from subscribers
  scrollY$ = this.scrollY.asObservable();

  constructor() { }

  updateScrollY(value: number): void {
    this.scrollY.next(value);
  }
}
