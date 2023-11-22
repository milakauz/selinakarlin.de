import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  contactForm!: FormGroup

  // constructor(private formBuilder: FormBuilder){}
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required), // Our existing name FormControl
      email: new FormControl('', Validators.required), // A new FormControl for the email
      message: new FormControl('', Validators.required)
    })
  }

  sendMail() {
    const formData = new FormData();
    formData.append('name', this.contactForm.value.name as string);
    formData.append('email', this.contactForm.value.email as string);
    formData.append('message', this.contactForm.value.message as string);
  }
}
