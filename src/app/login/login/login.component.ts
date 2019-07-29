import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error = [];

  constructor(private route: Router) { }

  public loginUser(event) {
    event.preventDefault();
    const lTarget = event.target;

    // storing login user details here
    const loginUserName = lTarget.querySelector('#lusername').value;
    const loginPassword = lTarget.querySelector('#lpassword').value;

    if (loginUserName && loginPassword) {
      this.route.navigate(['/inbox']);
      this.error = [];
    } else {
      this.error.push('* please Enter Right Credential')
    }
  }


  ngOnInit() {
  }

}
