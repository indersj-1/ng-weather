import { Component, OnInit, Pipe } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DateFormate } from '../date-formate'

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  weatherReport = [];
  erroMessage: string;
  country = {};
  loading: boolean = false;
  constructor(private climate: WeatherService) { }

  ngOnInit() {
  }

  getLocation(place: string) {
      this.weatherReport = [];
    if (place) {
      this.erroMessage = "";
      this.loading = true;
      this.climate.getWeather(place).subscribe(
        responseSuccess => {
          if (responseSuccess && responseSuccess.cod == 200) {
            this.weatherReport = responseSuccess.list;
            this.country = responseSuccess.city;
            console.log(responseSuccess.list);
            console.log(responseSuccess.city);
            this.loading = false;
          }
        }, ResponseError => {
          this.loading = false;
          this.erroMessage = ResponseError.json()
        });
    } else {
      this.weatherReport = [];
      this.country = {};
    }

  }
}
