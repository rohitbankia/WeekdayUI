import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import weekday from '../models/weekday';

@Injectable({
    providedIn: 'root'
})
export class WeekdayService {

    constructor(private http: HttpClient) { }
    weekdayAPIUrl = "https://localhost:44393/Weekday";
    weekdays: weekday[];
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getWeekDays() {
        return this.http.get<weekday[]>(this.weekdayAPIUrl);
    }

    postDates(dates: string[]) {
        return this.http.post<weekday[]>(this.weekdayAPIUrl, JSON.stringify(dates), this.httpOptions);
    }

}