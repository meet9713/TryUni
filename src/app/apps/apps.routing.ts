import { Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      
      {path: 'chat', 
      component: ChatComponent, 
      data: { title: 'Exercise Log', urls: [ { title: 'Dashboard', url: '/dashboard' }, { title: 'Exercise Log' } ] } },
      
      { path: 'ticketlist', component: TicketlistComponent,
        data: { title: 'Food Log', urls: [ { title: 'Dashboard', url: '/dashboard' }, { title: 'Food Log' } ] } },
      
      { path: 'ticketdetails', component: TicketdetailsComponent,
        data: { title: 'Add Food', urls: [ { title: 'Dashboard', url: '/dashboard' }, { title: 'Add Food' } ] } },
      
      { path: 'taskboard', component: TaskboardComponent, 
      data: { title: 'My Demographics', urls: [ { title: 'Dashboard', url: '/dashboard' }, { title: 'My Demographics' } ] } },
      
      { path: 'fullcalendar', component: FullcalendarComponent,
        data: { title: 'Add Exercise Duration', urls: [ { title: 'Dashboard', url: '/dashboard' }, { title: 'Add Exercise Duration' } ] } }
    ]
  }
];
