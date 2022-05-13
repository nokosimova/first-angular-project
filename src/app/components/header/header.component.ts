import { Component, OnInit } from '@angular/core';
import { UiserviceService } from 'src/app/services/uiservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = true ;
  subscription: Subscription;

  constructor(private uiService: UiserviceService) {
    this.subscription = this.uiService.onToggle().
    subscribe((value) => (this.showAddTask = value))
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
