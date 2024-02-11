import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';

  register() {
    // Add registration logic here
    // For demo, let's assume registration is successful
    alert('Registration successful! Please login.');
  }

}

