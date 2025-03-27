import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
protected userForm ={
  username: '',
  password: ''
}
public handleSubmit(event:SubmitEvent ) {
  console.log(event);
}
}
