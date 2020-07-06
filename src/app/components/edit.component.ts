import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeekdayService } from '../services/weekday.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  constructor(private fb: FormBuilder, private weekdayService: WeekdayService, private router: Router) { }
  weekDayForm = this.fb.group({
    date1: ['', Validators.required],
    date2: ['', Validators.required],
    date3: ['', Validators.required],
    date4: ['', Validators.required],
    date5: ['', Validators.required],
    date6: ['', Validators.required],
    date7: ['', Validators.required]
  });

  onSubmit(){
    let dates = [];
    dates.push(this.weekDayForm.value.date1);
    dates.push(this.weekDayForm.value.date2);
    dates.push(this.weekDayForm.value.date3);
    dates.push(this.weekDayForm.value.date4);
    dates.push(this.weekDayForm.value.date5);
    dates.push(this.weekDayForm.value.date6);
    dates.push(this.weekDayForm.value.date7);
    this.weekdayService.postDates(dates).subscribe(data=>{
      this.weekdayService.weekdays = data;
      this.router.navigate(['']);
    });
  }
}
