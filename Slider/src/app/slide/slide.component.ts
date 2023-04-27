import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
 selector: 'app-slidecomp',
 templateUrl: './slide.component.html',
 styleUrls: ['./slide.component.css']
})
export class SlideComponent {
 box = 'box';
 value = 0;

 slide(value: number) {
  if (value >= 500) {
    this.box = 'white';
  } 
  
  else {
    this.box = 'black';
  }
}



 formatLabel(value: number): string {
   if (value >= 1000) {
     return Math.round(value / 1000) + '';
   }


   return `${value}`;
 }
}
