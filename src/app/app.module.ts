import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weather.service';
import { DateFormate } from './date-formate.Pipe';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    WeatherReportComponent,DateFormate
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUdtcwJTO1nDbdWgjY-gJ-zC7m83OSkgs',
      libraries: ["places"]
    })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
