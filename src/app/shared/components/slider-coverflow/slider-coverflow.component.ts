import {Component, Input} from '@angular/core';

@Component({
  selector: 'shared-slider-coverflow',
  templateUrl: './slider-coverflow.component.html',
  styleUrl: './slider-coverflow.component.scss'
})
export class SliderCoverflowComponent{
  @Input()
  imagesSrc:string[]=[];

}
