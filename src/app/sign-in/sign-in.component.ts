import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('authtoken');
    localStorage.removeItem('username');
  }

  onSubmit(form: NgForm)
  {
    this.userService.loginUser(form.value).subscribe(
      res => {
        let t = JSON.parse(JSON.stringify(res));
        this.userService.isLoggedIn.next(true);
        localStorage.setItem('authtoken',t.token);
        localStorage.setItem('username',t.name);
        this.router.navigate(['/blogs'])
      },
      err => {
        console.log(err)
      }
    );
  }
}
