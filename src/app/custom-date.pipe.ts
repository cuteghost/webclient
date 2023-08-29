import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(value, 'MMM');
    const day = new Date(value).getDate();
    
    return `${formattedDate} ${day}${this.getDaySuffix(day)} ${new Date(value).getFullYear()}`;
  }

  private getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}