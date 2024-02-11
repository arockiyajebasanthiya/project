import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Add authentication logic here
    // For demo, let's assume authentication is successful
    this.router.navigateByUrl('grid');
  }
}