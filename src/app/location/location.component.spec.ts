import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MapsAPILoader } from '@agm/core';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let location: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationComponent],
      providers: [MapsAPILoader]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    location = fixture.debugElement.query(By.css('#location'));
  });


  it('Emitting the place', () => {
    location.nativeElement.value = "India";
    component.setLocation.subscribe((value) =>  value);
    expect(location.nativeElement.value).toBe("India");
  });


});
