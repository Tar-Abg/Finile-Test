import { Component, OnInit, Input } from '@angular/core';
import {GeneralService } from "../../services/general.service"

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public carsArray:Array<any>
  @Input() outCar

  constructor(private service:GeneralService) { 
    this.carsArray = this.service.cars
  }
    
  ngOnInit() {
  }

}
