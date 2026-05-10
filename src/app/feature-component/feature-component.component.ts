import {Component, Input} from '@angular/core';
import {Feature} from "../model/feature";

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.scss']
})
export class FeatureComponentComponent {
  @Input() feature!: Feature;
}
