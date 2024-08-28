import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HelloWorldBean {
  constructor(public message: string){}
}

export class EventDataServiceService {

  baseUrl = "http://localhost:8081/"

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(this.baseUrl + 'hello-world-bean');
  }
}
