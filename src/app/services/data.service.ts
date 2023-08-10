import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any =[];
  constructor() { }

  addFormData(data: any) {
    this.data.push(data);
  }
}
