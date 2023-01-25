import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  public _message: Subject<string> = new Subject();
  public message: Observable<string> = this._message.asObservable();
  constructor() {}
  toast(message) {
    this._message.next(message)
  }
}
