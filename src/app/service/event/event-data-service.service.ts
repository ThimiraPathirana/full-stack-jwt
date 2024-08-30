import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloEventBean } from 'src/app/model/eventData.model';

@Injectable({
  providedIn: 'root'
})

export class EventDataServiceService {

  baseUrl = "http://localhost:8081/"

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloEventBean>(this.baseUrl + 'hello-world-bean');
  }
}
