import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toDo } from '../models/toDo';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  apiUrl = 'http://127.0.0.1:8082/User';
 
  constructor(private httpClient: HttpClient) { }
  
  getToDo(){
     return this.httpClient.get<toDo[]>(this.apiUrl);
  }
}
