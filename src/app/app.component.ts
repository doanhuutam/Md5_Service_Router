import { Component } from '@angular/core';
import {Acount} from "./model/acount";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acount';
  list:Acount[]=[];

  constructor() {
    this.list.push(new Acount("doantam","adu1122"));
    this.list.push(new Acount("doanhuutam","adu1122"));
    this.list.push(new Acount("tam","adu1122"));
  }
  delete(index:number){
    this.list.splice(index,1);
  }
  create(acount:Acount){
    this.list.push(acount);
  }
  edit(acount:Acount){
    for (let i=0;i<this.list.length;i++){
      if (this.list[i].name==acount.name){
        this.list[i]=acount
      }
    }
  }
}
