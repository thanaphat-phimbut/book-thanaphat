import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Mock } from './mock';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  FlightDetail: Flight[] = [];
  constructor() {
    this.FlightDetail = Mock.mflight;
  }
  getPage(){
    return this.FlightDetail
  }
}
