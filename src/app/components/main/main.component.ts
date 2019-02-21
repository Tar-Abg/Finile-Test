import { Component, OnInit } from '@angular/core';
import {GeneralService } from "../../services/general.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public carsArray:Array<any>;
  public search:String;
  public carName:string;
 
  constructor(private service:GeneralService) {

    this.carsArray = this.service.cars;
        
   }

  ngOnInit() {
    
}

searchByName(){
  for(let i = 0; i < this.carsArray.length; i++){
    this.carsArray[i].search = this.carsArray[i].name.toLowerCase().search(this.carName.toLowerCase());
  }
}
}