import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GeneralService } from '../../services/general.service'


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public id:number;
  public carsObject:any;
  
 

  constructor(private activeRout:ActivatedRoute, private service:GeneralService  ) {
    this
     this.activeRout.params
    .subscribe((params) => {
      this.id = params['id'];
      this.carsObject = this.service.foundId(this.id)
    
      
    })
    
      
   }

  ngOnInit() {
    
  }

}
