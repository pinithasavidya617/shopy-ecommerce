import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Feature} from "../model/feature";

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.scss']
})
export class FeatureComponentComponent implements OnInit , OnChanges, AfterViewInit, OnDestroy{
  @Input() feature!: Feature;

  constructor() {
    console.log('FeatureComponentComponentComponent constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('FeatureComponentComponentComponent ngOnChanges called');
  }

  ngOnInit() {
    console.log('FeatureComponentComponentComponent ngOnInit');
  }

  ngDoCheck() {
    console.log('FeatureComponentComponentComponent ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('FeatureComponentComponentComponent ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('FeatureComponentComponentComponent ngOnDestroy');
  }
}
