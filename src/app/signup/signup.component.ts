import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm;
  constructor() { }


  ngOnInit() {
    this.signUpForm = new FormGroup ({
      fname: new FormControl(""),
      lname: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      zipCode: new FormControl("")
    })
  }

  signup(user) {
    this.signUpForm.reset();
    console.log("Signed in");
  }


}
