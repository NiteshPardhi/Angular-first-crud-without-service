import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  logCrediential:any = {
    userName: 'nitesh', 
    password: '12345'
  }
  submitted = false;
  loginData: any = [];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    localStorage.setItem('loginCredientials', JSON.stringify(this.logCrediential));
  }

  onLogin(){
    this.loginData = this.loginForm.value;
    //console.log(this.loginForm.value)

    if (this.loginForm.invalid) {
      this.submitted = true;
      return;
    }

    this.loginService._login(this.loginData);
  }

}
