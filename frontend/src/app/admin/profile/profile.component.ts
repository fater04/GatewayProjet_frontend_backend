import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../models/user.model';
import {DeviceService} from '../../services/device.service';
import {ToastrService} from 'ngx-toastr';
import {Device} from '../../models/device.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  devices?: Device[];
  user: User;
  constructor(private tokenStorage: TokenStorageService, private deviceService: DeviceService, private message: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
    this.getDevice();
  }

  getDevice(): void {
    this.deviceService.getAll(this.user.id)
      .subscribe(
        (data) => {

          this.devices = data;
        },
        (error) => {
          this.message.error(error, 'Error');
        });
  }

  refresh(): void {
    this.getDevice();
  }

  delete(id: number): void {
    this.deviceService.delete(id)
      .subscribe(
        response => {
          this.refresh();
          this.message.info('Device Delete !');
        },
        error => {
          this.message.error(error, 'Error');
        });
  }

}
