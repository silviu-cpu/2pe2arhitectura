import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xd827el', 
        'template_wc5657i',
        e.target as HTMLFormElement,
        'user_EelcXR1O2dtBCcKFTmS2V'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('Email successfully sent!', result.text);
          this.clearForm();
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  }

  clearForm() {
    const form = document.querySelector('form') as HTMLFormElement;
    form.reset();
  }
}
