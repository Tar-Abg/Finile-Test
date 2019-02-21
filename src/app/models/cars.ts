export class Car{
    constructor(name,model, description, img, id){
        this.name = name;
        this.model = model;
        this.description = description;
        this.img = img;
        this.id = id;
        // this.search = true;
    }
    name:string;
    model:string;
    description:string;
    img:string;
    id:number;
    search:number = 0
}