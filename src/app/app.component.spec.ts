import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { WeatherService } from './weather.service';
import { DateFormate } from './date-formate.Pipe';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,LocationComponent,WeatherReportComponent
      ],
    }).compileComponents();
  }));

});
