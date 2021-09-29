import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Acount} from "../model/acount";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent implements OnInit {
  // @Input()
  listAcc: Acount[] = [];
  fromAcc: FormGroup = new FormGroup({});
name:string="";
passwork:string="";

  constructor(private serviceacc:ProductService) {
    this.listAcc=this.serviceacc.list
  }

  ngOnInit(): void {
    this.fromAcc = new FormGroup({
      name: new FormControl(),
      passwork: new FormControl()
    })
  }

  // @Output() deleteAcc = new EventEmitter();
  //
  // delete(index: number) {
  //   this.deleteAcc.emit(index)
  //
  // }
  delete(index:number){
    this.serviceacc.delete(index)
  }

  // @Output() createAcc = new EventEmitter();
  //
  // create() {
  //   this.createAcc.emit(this.fromAcc.value)
  // }
  create(){
    this.serviceacc.create(this.fromAcc.value)
  }

  // @Output() editAcc = new EventEmitter();
  //
  // edit() {
  //   this.editAcc.emit(this.fromAcc.value);
  // }
  edit(){
    this.serviceacc.edit(this.fromAcc.value)
  }
  show(name?:string){
    for (let i=0;i<this.listAcc.length;i++){
      if (this.listAcc[i].name===name){
        this.fromAcc.get('name')?.setValue(this.listAcc[i].name);
        this.fromAcc.get('passwork')?.setValue(this.listAcc[i].passwork);
      }
    }
  }

}
