import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  data: Observable<number> = this.dataSource.asObservable();
 
  constructor() { }
 
  sendData(data: number) {
    this.dataSource.next(data);
  }
}