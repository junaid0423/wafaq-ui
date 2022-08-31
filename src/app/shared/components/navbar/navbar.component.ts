import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigations } from '../../utils/navigations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navOptions: any = Navigations.landingNav;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(route: string) {
    if (
      route === 'objectives' ||
      route === 'offices' ||
      route === 'background' ||
      route === 'contact-us'
    ) {
      if (this.router.url.slice(3) !== 'landing') {
        this.router.navigate(['/']);
      }
      this.scroll(route);
    } else {
      this.router.navigate([route]);
    }
  }

  scroll(el: string) {
    const ele: HTMLElement = document.getElementById(el) as HTMLElement;
    setTimeout(() => {
      ele.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}
