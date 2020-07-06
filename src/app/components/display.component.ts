import { Component, OnInit } from '@angular/core';
import { WeekdayService } from '../services/weekday.service';
import weekday from '../models/weekday';

@Component({
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  weekdays: weekday[];
  constructor(private weekdayService: WeekdayService) {

  }
  ngOnInit() {
    if (this.weekdayService.weekdays)
      this.weekdays = this.weekdayService.weekdays;
    else {
      this.weekdayService.getWeekDays().subscribe(data => {
        this.weekdays = data;
      });
    }
  }
}
