import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any;
  isTrue:boolean = false;
  constructor(private router: Router) { }

  _login(loginUser: { userName: string, password: string }) :any{
    this.user = JSON.parse(localStorage.getItem('loginCredientials') || '{}');

    this.isTrue = true;
    if (this.user.userName == loginUser.userName && this.user.password == loginUser.password) {
      alert('Login Sucessfull....!');
      this.router.navigate(['/table']);
    } else {
      alert('Login Failed...Wrong Crediential....!');
    }
  }
}
