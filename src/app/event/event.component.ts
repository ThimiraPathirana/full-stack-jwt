import { Component } from '@angular/core';
import { EventData } from '../model/eventData.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  
  EVENT_DATA: EventData[] = [
    {
      id: 1,
      name: 'Esala perahara',
      description: 'Daladha perahara in kandy',
      venue: 'Kandy',
      date: new Date(),
    },
    {
      id: 1,
      name: 'Blood donation',
      description: 'Blood donation host by Lion association',
      venue: 'Maharagama',
      date: new Date(),
    },
    {
      id: 1,
      name: 'France Education Fair',
      description: 'France Education Fair 2024',
      venue: 'BMICH',
      date: new Date(),
    },
    {
      id: 1,
      name: 'Tech Career Fair',
      description: 'Virtual Tech Career Fair',
      venue: 'Colombo',
      date: new Date(),
    },
  ];
}

