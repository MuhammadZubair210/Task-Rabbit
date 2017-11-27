import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup ({
      email: new FormControl(""),
      password: new FormControl(""),
    })
  }

  login(value){
    this.loginForm.reset();
    console.log('login');
  }

}
