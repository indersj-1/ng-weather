import { Component, OnInit,ViewChild, ElementRef, NgZone,Output,EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 title = 'Weather forecast for a location of your choice.'
  @Output() setLocation = new EventEmitter();
  @ViewChild('search') public searchElement: ElementRef;
  onSearchChange(searchValue: string) {
    if (!searchValue) {
      this.setLocation.emit("");
    }
  }
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);

        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            console.log("place selected", place)
            this.setLocation.emit(place.name);
          });
        });
      }
    );
  }

}
