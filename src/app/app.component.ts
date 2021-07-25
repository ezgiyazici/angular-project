import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-first-project';
  user = 'Ezgi Yazıcı';
  form: FormGroup;
  constructor(private toastr: ToastrService,private spinner: NgxSpinnerService,private http: HttpClient,public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      surname: [''],
      age: 0,
      country: ['']
    })
  }
  
  ngOnInit() {
    this.submitUser();
    this.showSpinner();
    this.showSuccess();
    this.showWarning();
  }

  showSuccess() {
    this.toastr.success('User Service', 'Giriş Başarılı');
  }
  showWarning(){
    this.toastr.warning("User Service","Uygulama kullanıma hazır değildir!")
  }

  showSpinner(){
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }


  submitUser(){
    var formData: any = new FormData();
  formData.append("name", "Ahmet");
  formData.append("surname", "aydın");
  formData.append("age", 25);
  formData.append("country", "aydın");

  this.http.get("http://localhost:8082/User").subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  }



} 
