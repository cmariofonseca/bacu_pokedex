import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public loadingObs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  showLoading() {
    this.loadingObs.next(true);
  }

  hideLoading() {
    this.loadingObs.next(false);
  }
}
