import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EventDataServiceService,
  HelloWorldBean,
} from '../service/event/event-data-service.service';
import { error } from 'cypress/types/jquery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name: string = '';
  message: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventDataServiceService: EventDataServiceService
  ) {}

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];
  }

  getHelloBean() {
    this.eventDataServiceService.executeHelloWorldBeanService().subscribe(
      (response) => this.successBeanMessage(response),
      (error) => this.errorBeanMessage(error)
    );
  }

  successBeanMessage(response: HelloWorldBean) {
    this.message = response.message;
  }

  errorBeanMessage(error: any) {
    this.message = error.error.message;
  }
}
