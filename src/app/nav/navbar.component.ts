
import { Component } from '@angular/core';

/**
 * @navbar
 */
@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  .navbar-brand {
    font-size: 200%;
  }
  .nav.navbar-nav {font-size: 15px;
  list-style: none;
  }
  li {display: inline;
  margin-right: 50px;
  }
  li a {
    text-decoration: none;
  }
li > a.active {color: orange;}
  `
  ]
})
export class NavBarComponent {


}
