import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'app works!';
    series: Object = {
        argumentField: 'day',
        valueField: 'oranges',
        name: 'My oranges',
        type: 'bar',
        color: '#ffa500'
    };
    oranges: Orange[] = [
        { day: 'Monday', oranges: 3 },
        { day: 'Tuesday', oranges: 2 },
        { day: 'Wednesday', oranges: 3 },
        { day: 'Thursday', oranges: 4 },
        { day: 'Friday', oranges: 6 },
        { day: 'Saturday', oranges: 11 },
        { day: 'Sunday', oranges: 4 }];
}
export class Orange {
    day: string;
    oranges: number;
}
