import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users?: User[];

  constructor(private userService: UserService, private message: ToastrService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getAll()
      .subscribe(
        (data) => {

          this.users = data;
        },
        (error) => {
          this.message.error(error, 'Error');
        });
  }

  refresh(): void {


    this.getUsers();

  }

  delete(id: number): void {
    this.userService.delete(id)
      .subscribe(
        response => {
          this.refresh();
          this.message.info('users Delete !');
        },
        error => {
          this.message.error(error, 'Error');
        });
  }
}
