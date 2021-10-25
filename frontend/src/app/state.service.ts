import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private versionSource = new BehaviorSubject<number>(1);
  version = this.versionSource.asObservable()

  constructor() { }

  changeVersion(selectedVersion: number) {
    this.versionSource.next(selectedVersion);
  }
}
