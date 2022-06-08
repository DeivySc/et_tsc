import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loginFormGroup!: FormGroup;
  usu = new FormControl('', Validators.required);
  pass = new FormControl('', Validators.required);

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  onSubmit(): void {
    if (this.usu.value === 'test01' && this.pass.value === 'test01'){
      this.router.navigateByUrl('/tasks');
    }
    console.log(this.loginFormGroup.value);
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      usu: this.usu,
      pass: this.pass
    })
  }
}
