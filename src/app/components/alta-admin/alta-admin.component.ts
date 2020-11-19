import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-alta-admin',
  templateUrl: './alta-admin.component.html',
  styleUrls: ['./alta-admin.component.css']
})
export class AltaAdminComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private authentication: AuthenticationService) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  submit() {
    if (this.userForm.valid) {
      this.authentication.createUser(this.userForm.get('email').value, this.userForm.get('password').value).then((value) => {
        console.log(value);
      }).catch(console.error);
    }
  }
}
