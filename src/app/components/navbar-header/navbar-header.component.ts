import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
  loggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loggedIn = this.authenticationService.isLoggedIn();

  }

  logout(): void {
    this.authenticationService.logout();
  }

  getEmail() {
    return localStorage.getItem('email');
  }
}
