import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { Http, ResponseOptions, Response,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { WeatherService } from './weather.service';
import { SearchItem } from './search-item'
const mockResponse = { "city": { "id": 47051191, "name": "India", "coord": { "lon": -96.6162, "lat": 32.5251 }, "country": "US", "population": 36361 }, "cod": "200", "message": 45.1078564, "cnt": 7, "list": [{ "dt": 1520100000, "temp": { "day": 19.7, "min": 15.72, "max": 19.7, "night": 15.72, "eve": 19.7, "morn": 19.7 }, "pressure": 1017.84, "humidity": 65, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }], "speed": 5.11, "deg": 128, "clouds": 48 }, { "dt": 1520186400, "temp": { "day": 18.28, "min": 13.74, "max": 20.13, "night": 18.91, "eve": 20.13, "morn": 13.74 }, "pressure": 1015.57, "humidity": 83, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 6.53, "deg": 145, "clouds": 88, "rain": 1.94 }, { "dt": 1520272800, "temp": { "day": 21.05, "min": 8.56, "max": 21.05, "night": 8.56, "eve": 15.91, "morn": 18.81 }, "pressure": 1011.02, "humidity": 73, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "speed": 7.81, "deg": 344, "clouds": 0, "rain": 4.22 }, { "dt": 1520359200, "temp": { "day": 13.88, "min": 4.56, "max": 13.88, "night": 4.56, "eve": 12.87, "morn": 5.56 }, "pressure": 1012.45, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 7.93, "deg": 11, "clouds": 0 }, { "dt": 1520445600, "temp": { "day": 11.84, "min": 0.83, "max": 12.26, "night": 5.45, "eve": 12.26, "morn": 0.83 }, "pressure": 1017.58, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 3.6, "deg": 32, "clouds": 0 }, { "dt": 1520532000, "temp": { "day": 13.73, "min": 5.72, "max": 14.99, "night": 13.26, "eve": 14.99, "morn": 5.72 }, "pressure": 1007.96, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 8.42, "deg": 181, "clouds": 67 }, { "dt": 1520618400, "temp": { "day": 14.5, "min": 10.72, "max": 14.5, "night": 10.72, "eve": 13.47, "morn": 11.31 }, "pressure": 1004.99, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 5.07, "deg": 100, "clouds": 96, "rain": 2.64 }] }


describe('WeatherService', () => {
  let mockHttp: Http;
  beforeEach(() => {
    mockHttp = { get: null } as Http;
    spyOn(mockHttp, 'get').and.returnValue(Observable.of({
      json: () => mockResponse
    }));
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http,
          useValue: mockHttp
        },
        WeatherService
      ]
    });
  });

  it('should get search results', fakeAsync(
    inject([WeatherService], searchWeather => {
      const expectedUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=india&units=metric&APPID=fc0c4e1ec49d0c022df6519574a1a2ca';
      searchWeather.getWeather('india')
        .subscribe(res => {
          let item = new SearchItem(res.city,res.list)
          expect(mockHttp.get).toHaveBeenCalledWith(expectedUrl);
          expect(item.city.name).toEqual('India');
        });
    })
  ));

});
