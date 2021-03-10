import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {Device} from '../../../models/device.model';
import {DeviceService} from '../../../services/device.service';

@Component({
  selector: 'app-detail-device',
  templateUrl: './detail-device.component.html',
  styleUrls: ['./detail-device.component.css']
})
export class DetailDeviceComponent implements OnInit {
  device?: Device;

  constructor(private message: ToastrService, private deviceService: DeviceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getDevice(this.route.snapshot.params.code);
  }

  getDevice(code: string): void {
    this.deviceService.getOne(code)
      .subscribe(
        (data) => {
          this.device = data;
        },
        (error) => {
          this.message.error(error);
        });
  }

  onSubmit(form: NgForm): void {
    const data = {
      code: form.value.code,
      nom: form.value.nom,
      phone: form.value.phone
    };
    this.updateDevice(this.device.id, data);
    this.router.navigate(['/devices']);
  }

  updateDevice(id: number, data: any): void {
    this.deviceService.update(id, data)
      .subscribe(
        response => {
          this.message.info(response.message);
        },
        error => {
          this.message.error(error.error.errors[0].msg);
        });
  }
}
