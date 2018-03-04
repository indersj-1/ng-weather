import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { WeatherReportComponent } from './weather-report.component';
import { By } from "@angular/platform-browser";
describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;
  let country: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



});
