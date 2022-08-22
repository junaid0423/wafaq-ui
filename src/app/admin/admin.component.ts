import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  toggle: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.toggle = !this.toggle;
  }
}
