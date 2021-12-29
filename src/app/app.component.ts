import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  ngOnInit(): void {
  }
  onSubmit(){
    this.form={};
    alert("Formulaire est valide")
  }
  Annuler(){
    this.form={};
  }
  title = 'Formulaire';
}
