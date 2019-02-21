import { Injectable } from '@angular/core';
import { Car } from "../models/cars";


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public carName:string
  public cars:Array<any> = [ new Car('Bmw', 'X1', 'kjdjkedfkjhekdhnekjdhne', 'https://www.passportbmw.com/assets/stock/colormatched_01/white/640/cc_2018bms250001_01_640/cc_2018bms250001_01_640_300.jpg',1),
                            new Car('Bmw', 'X', 'kjdjkedfkp[;lelpdlopedopekjdhne', 'https://www.bmw.com.mx/content/dam/bmw/common/all-models/x-series/x5/2015/model-card/bmw-iperformance-x5-xdrive40e-flyout-890x501.png',2),
                            new Car('Jaguar', 'XF', 'kjdjkedfkjhekdhnekjdhne', 'https://mychiptuningfiles.com/image.php?file=bsrhr8Nqu1uz6vTspNbwqw55cxAUWG.png',3),
                            new Car('Bmw', 'X4', 'kjdjkedfkjhekdhnekjdhne', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmoEH1QxQiu7c1AMjoNRVcpFjjRvMvSBpreQX7Eu9KW-JFi5N',4),
                            new Car('Bmw', 'Xxx', 'kjdjkedfkjhekdhnekjdhne', 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/bmw_x7_bmw-x7_2019-1541093434810.jpg',5) ]

  constructor() { }
  foundId(id){
    var obj
    this.cars.map((data)=>{
      if(data.id == id){
        obj = data;
        return
      }
      

    });
    return obj;
  }

 
}
