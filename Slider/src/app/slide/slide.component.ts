import { Component } from '@angular/core';

@Component({
 selector: 'app-slidecomp',
 templateUrl: './slide.component.html',
 styleUrls: ['./slide.component.css']
})
export class SlideComponent {
 box = 'box';
 value = 0;


 formatLabel(value: number): string {
   if (value >= 1000) {
     return Math.round(value / 1000) + '';
   }


   return `${value}`;
 }
}
