import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.css']
})
export class ErreurComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }
}
