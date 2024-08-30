import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDataServiceService } from '../service/event/event-data-service.service';
import { error } from 'cypress/types/jquery';
import { HelloEventBean } from '../model/eventData.model';

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

  successBeanMessage(response: HelloEventBean) {
    this.message = response.message;
  }

  errorBeanMessage(error: any) {
    this.message = error.error.message;
  }
}
