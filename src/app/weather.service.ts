import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class WeatherService {
  apiKey: string = 'fc0c4e1ec49d0c022df6519574a1a2ca';
  url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=';
  constructor(public http: Http) {

  }
  getWeather(city) {
    return this.http.get(this.url + city + '&units=metric&APPID=' + this.apiKey).map(res => res.json())
      .catch(this._errorHandler);
  }
  _errorHandler(error: Response) {
    console.error('-------------------------------', error);
    return Observable.throw(error || "Service Error")
  }
}
