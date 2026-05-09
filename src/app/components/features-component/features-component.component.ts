import { Component } from '@angular/core';
import {Feature} from "../../model/feature";

@Component({
  selector: 'app-features-component',
  templateUrl: './features-component.component.html',
  styleUrls: ['./features-component.component.scss']
})
export class FeaturesComponentComponent {
    public features: Feature[] = [
      new Feature("fa-truck", "Free Shopping", "Abc"),
      new Feature("fa-money", "Free Shopping", "Abc"),
      new Feature("fa-globe", "Free Shopping", "Abc"),
    ]
}
