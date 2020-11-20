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

  insertUsers() {
    localStorage.setItem('users', JSON.stringify([
      {email: 'carlos@mailinator.com', password: '123456789', role: 'alumno'},
      {email: 'juan@mailinator.com', password: '123456789', role: 'alumno'},
      {email: 'juan@mailinator.com', password: '123456789', role: 'profesor'},
      {email: 'alberto@profesor.com', password: '123456789', role: 'profesor'},
      {email: 'perez@profesor.com', password: '123456789', role: 'profesor'},
      {email: 'sanchez@profesor.com', password: '123456789', role: 'profesor'},
      {email: 'sosaa@profesor.com', password: '123456789', role: 'profesor'},
      {email: 'monson@profesor.com', password: '123456789', role: 'profesor'},
      {email: 'yamil@profesor.com', password: '123456789', role: 'profesor'},
      {email: 'sofia@admin.com', password: '123456789', role: 'admin'},
    ]));
  }
}
