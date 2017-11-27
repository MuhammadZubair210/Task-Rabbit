import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  fpForm;
  constructor() { }

  ngOnInit() {
    this.fpForm = new FormGroup ({
      email: new FormControl("")
    })
  }

  forgetPswd(value){
    this.fpForm.reset()
    console.log("forget password");
  }

}
