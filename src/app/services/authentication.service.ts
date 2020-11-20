// import {AngularFireAuth} from '@angular/fire/auth';
// import * as moment from 'moment';
import {Subject} from 'rxjs';
// import {User} from 'firebase';
import {Router} from '@angular/router';
import {Injectable, isDevMode} from '@angular/core';
// import UserCredential = firebase.auth.UserCredential;
import {UserCreation} from '../user-creation';

const validUsers = [
  {email: 'carlos@mailinator.com', password: '123456789', role: 'alumno'},
  {email: 'juan@mailinator.com', password: '123456789', role: 'alumno'},
  {email: 'juan@mailinator.com', password: '123456789', role: 'profesor'},
  {email: 'admin@admin.com', password: '123456789', role: 'admin'},
];

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean;
  userLoggedIn = new Subject<boolean>();

  // constructor(public afAuth: AngularFireAuth, private router: Router) {
  // }
  private email: string;
  private role: string;
  private loggedIn: boolean;
  constructor(private router: Router) {
  }

  // private setSession(value: UserCredential): void {
    // this.authenticated = true;
    // console.log(`logging: ${value}`);
    // localStorage.setItem('email', value.user.email);
    // value.user.getIdTokenResult().then(tokenInfo => {
    //   console.log(`log succesful: ${tokenInfo}`);
    //   localStorage.setItem('id_token', tokenInfo.token);
    //   localStorage.setItem('expires_at', tokenInfo.expirationTime);
    //
    //   this.store.collection('users').doc(value.user.email).get().toPromise()
    //     .then(console.log)
    //     .catch(err => {
    //       throw err;
    //     });
    //   return true;
    // }).catch(error => {
    //   console.error(error);
    //   return error;
    // });
  // }

  // private returnErrorCode(error) {
  //   return error;
  // }

  // public signUp(email, password) {
  //   console.log(`Email: ${email}`);
  //   return this.afAuth.createUserWithEmailAndPassword(email, password);
  // }

  public login(email, password): any {
    // return new Promise<boolean>(((resolve, reject) => this.afAuth.signInWithEmailAndPassword(email, password)
    //   .then(value => {
    //     this.setSession(value);
    //     resolve(true);
    //   })
    //   .catch(error => reject(error)))
    // );

    return new Promise<any>((resolve, reject) => {
      const userFound = validUsers.find(value => value.email === email);
      if (userFound) {
        if (userFound.password === password) {
          // @ts-ignore
          localStorage.setItem('loggedIn', true);
          localStorage.setItem('email', email);
          localStorage.setItem('role', userFound.role);
          this.email = email;
          this.role = userFound.role;
          this.loggedIn = true;
          return resolve(userFound);
        }
      }
      return reject('Invalid user');
    });
  }

  public async logout(): Promise<any> {
    localStorage.removeItem('loggedIn');
    this.loggedIn = false;
    await this.router.navigate(['/login']);
    // this.afAuth.signOut().then(function() {
    //   this.router.navigate(['/']);
    // }.bind(this))
    //   .catch(this.returnErrorCode);
  }

  // guessLogin() {
  //   // this.afAuth.signInAnonymously().then(this.setSession).catch(this.returnErrorCode);
  // }
  //
  // sendVerificationMail() {
  //   // return firebase.auth().currentUser.sendEmailVerification()
  //   //   .then(() => {
  //   //     this.router.navigate(['/welcome']);
  //   //   }).catch(console.error);
  // }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
  //
  // getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   // return moment(expiration);
  // }
  //
  // checkAuthStatus() {
  //   // this.afAuth.onAuthStateChanged((user: User) => {
  //   //   this.authenticated = !!user;
  //   //   this.userLoggedIn.next(this.authenticated);
  //   // });
  // }
  //
  // forgotPassword(email: string) {
  //   // return this.afAuth.sendPasswordResetEmail(email);
  // }

  createUser(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => resolve('User created'));
    // console.log(userToCreate);
    // let actionCodeSettings = {
    //   // URL you want to redirect back to. The domain (www.example.com) for this
    //   // URL must be in the authorized domains list in the Firebase Console.
    //   url: isDevMode() ? 'http://localhost:4200/welcome' : 'https://online-clinic-23508.web.app/welcome'
    // };
    // return this.signUp(email, password)
    //   .then(value => value.user.sendEmailVerification(actionCodeSettings)
    //   )
    //   .then(() => this.store.collection('users').doc(email).set(
    //     {
    //       name: userToCreate.name,
    //       lastname: userToCreate.lastname,
    //       profile: userToCreate.profile,
    //       specializations: userToCreate.specializations
    //     })
    //     .catch(err => new Promise((resolve, reject) => {
    //       console.log('entro al error');
    //       console.log(err.code_);
    //       if (err.code_ !== 'storage/object-not-found') {
    //         reject(err);
    //       }
    //       resolve();
    //     }))
    //   )
    //   .then(() => new Promise<any>((resolve, reject) => {
    //     if (userToCreate.profile.toLowerCase() === 'patient') {
    //       return Promise.all([this.angularFireStorage.ref(email + '_1.jpg').put(userToCreate.firstImage),
    //         this.angularFireStorage.ref(email + '_2.jpg').put(userToCreate.secondImage)]).then(value => {
    //         resolve(true);
    //       }).catch(reject);
    //     }
    //     resolve(true);
    //   }));
  }

  // sendSignInLinkToEmail(email: any, password: any) {
  //   let actionCodeSettings = {
  //     // URL you want to redirect back to. The domain (www.example.com) for this
  //     // URL must be in the authorized domains list in the Firebase Console.
  //     url: isDevMode() ? 'http://localhost:4200/welcome' : 'https://online-clinic-23508.web.app/welcome',
  //     // This must be true.
  //     handleCodeInApp: true,
  //
  //   };
  //   this.afAuth.sendSignInLinkToEmail(email, actionCodeSettings).then(value => {
  //     console.log(value);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }

  isAlumno(): boolean {
     return localStorage.getItem('role') === 'alumno';
  }
  isProfesor(): boolean {
     return localStorage.getItem('role') === 'profesor';
  }

  isAdmin() {
    return localStorage.getItem('role') === 'admin';
  }
}
