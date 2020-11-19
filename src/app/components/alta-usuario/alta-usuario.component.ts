import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  userForm: FormGroup;
  options = ['alumno', 'profesor'];

  constructor(private fb: FormBuilder, private authentication: AuthenticationService) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.email],
      profile: ['', Validators.required],
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
