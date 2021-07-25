import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { identity } from 'rxjs';
import { toDo } from 'src/app/models/toDo';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  todos: toDo[] = [];
  dataLoaded = false;
  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.getToDo();
  }
  getToDo() {
    this.userService.getToDo().subscribe(tmp_todos=>{
      this.todos=tmp_todos;
      this.dataLoaded=true;
      console.log(this.todos);
    })
  }
}
