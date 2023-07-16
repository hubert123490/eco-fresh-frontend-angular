import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: string): string {
    const numberValue = parseFloat(value);
    const formattedValue = (numberValue / 100).toFixed(2);
    return formattedValue;
  }
}
