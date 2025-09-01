import { Component } from '@angular/core';
import { Card01 } from '../components/ui/card-01/card-01';
import { Input01 } from '../components/ui/input-01/input-01';
import { Button01 } from '../components/ui/button-01/button-01';
import { UserService } from '../services/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [Card01, Input01, Button01],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  hasAccount: boolean = true;

  login = {
    inputUser: '',
    inputPassword: ''
  };

  signup = {
    inputName: '',    
    inputUsername: '',    
    inputPassword: ''    
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  // ===========================================================================================
  hasAccountHandle() {
    this.hasAccount = !this.hasAccount;
  }

  // ===========================================================================================
  onSubmit(event?: Event) {
    event?.preventDefault();

    if (this.hasAccount === true) {

      const payload = {
        username: this.login.inputUser.toLowerCase(),
        password: this.login.inputPassword
      };
  
      this.userService.authUser(payload).subscribe({

        next: (response) => {
          console.log('Login OK!', response);
          this.router.navigate(['/home']);
        },

        error: (err) => {
          console.error('Login error!', err);
        }
      });
      return;
    }

    const payload = {
      name: this.signup.inputName.toUpperCase(),
      username: this.signup.inputUsername.toLowerCase(),
      password: this.signup.inputPassword
    };

    this.userService.createUser(payload).subscribe({

      next: (response) => {
        console.log('Sign up OK!', response);
      },
      
      error: (err) => {
        console.error('Sign up error!', err);
      }
    });

    this.hasAccountHandle();
  }
}
