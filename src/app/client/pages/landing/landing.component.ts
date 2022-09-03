import { Component, OnInit } from '@angular/core';
import { Navigations } from 'src/app/shared/utils/navigations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  navOptions: any = Navigations.landingNav.reverse();

  notifications: any = [
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
  ];
  quickLinks: any = [
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
  ];
  constructor() {}

  ngOnInit(): void {}
}
