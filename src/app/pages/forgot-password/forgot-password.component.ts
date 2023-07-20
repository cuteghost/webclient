import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = '';

  resetPassword() {
    // Perform password reset logic here
    // You can send a reset password email to the entered email address
    // or handle the password reset in any other way appropriate for your application
  }
}