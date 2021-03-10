import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    pseudo: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {pseudo, email, password} = this.form;

    this.userService.register(pseudo, email, password).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage =   err.error.errors[0].msg;
        this.isSignUpFailed = true;
      }
    );
  }

}
