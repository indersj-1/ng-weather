import { Pipe } from '@angular/core';
@Pipe({
  name: "dateFormate"
})
export class DateFormate {
  transform(value: number) {
    let dateString;
    if (value) {
      dateString = new Date(value * 1000);
      dateString = dateString.toDateString()
    } else {
      dateString = "";
    }
    return dateString;
  }
}
