import { Component } from '@angular/core';
import { Card01 } from '../components/ui/card-01/card-01';
import { Input01 } from '../components/ui/input-01/input-01';
import { Button01 } from '../components/ui/button-01/button-01';

@Component({
  selector: 'app-login',
  imports: [Card01, Input01, Button01],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  inputUser: string = '';
  inputPassword: string = '';
}
