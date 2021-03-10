import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formConnecte: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  errorMessageFromServer = '';
  user = [];

  constructor(private userService: UserService,
              private tokenStorage: TokenStorageService,
              private message: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser();
    }
  }

  onSubmit(): void {
    const username = this.formConnecte.username;
    const password = this.formConnecte.password;


    this.userService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.user = this.tokenStorage.getUser();
        // @ts-ignore
        if ('user' === this.user.role) {
          this.router.navigate(['/profile']);
        } else {
          this.router.navigate(['/dashboard']);
        }
        this.message.info('login successfully ! ');
      },
      err => {
        this.errorMessage = err.error.message;
        this.errorMessageFromServer = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}

export class NgbdTooltipBasic {
}
