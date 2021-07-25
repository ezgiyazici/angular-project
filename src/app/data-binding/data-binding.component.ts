import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  user= {
    name:"Ahmet",
    surname:"Aydın",
    job:"Software Developer",
    isEditable:false,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked(){
    alert("clicked");
  }

  inputSubmit(value:any){
    alert(value.target.value + " geldi.....");
  }

}
