import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  onSubmit(): void {
    // Here you can implement the logic to handle the form submission.
    // For this example, we will just log the form data.
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    // You can perform any additional operations like sending data to the server or displaying a confirmation message.
  }
}

