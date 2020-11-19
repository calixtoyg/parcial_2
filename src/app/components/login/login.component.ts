import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  loginForm: FormGroup;
  @ViewChild('alert', {static: false}) alert: NgbAlert;
  alertMessage: string;
  alertType: string;
  private alertSubscription = new Subject<any>();

  constructor(private fb: FormBuilder, public authentication: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.alertSubscription.subscribe(({message, successful}) => {
      this.alertMessage = message;
      this.alertType = successful ? 'success' : 'danger';
    });
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }


  login(): void {
    if (this.loginForm.valid) {
      this.authentication
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .then(({role}) => {
          if (role === 'alumno') {
            this.router.navigate(['/welcome/alumno']);
          } else if (role === 'profesor') {
            this.router.navigate(['/welcome/profesor']);
          }
          return this.router.navigate(['welcome']);
        })
        .catch((error) => {
          this.alertSubscription.next({message: error, successful: false});
        });
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  //
  // forgotPassword() {
  //   const modalRef = this.modalService.open(ForgotPasswordComponent);
  //   modalRef.componentInstance.email = this.loginForm.value.email || '';
  //   modalRef.result.then(value => {
  //     this.alertSubscription.next(value);
  //
  //   });
  // }


}
