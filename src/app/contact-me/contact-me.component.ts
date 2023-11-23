import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required), // Our existing name FormControl
    email: new FormControl('', [Validators.required, Validators.email]), // A new FormControl for the email
    message: new FormControl('', Validators.required),
    privacyPolicy: new FormControl(false, Validators.requiredTrue)
  });

  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;
  checkBoxError: boolean = false;
  formIsCorrect: boolean = false;
  messageSucceed: boolean = false;

  ngOnInit() {
  }

  async sendMail() {
    this.checkForm();
    if (this.formIsCorrect === true) {
      // console.log('Sending Mail!');
      // this.disableFormElements();
      // this.getData();
      let nameField = this.nameInput.nativeElement;
      let emailField = this.emailInput.nativeElement;
      let messageField = this.messageInput.nativeElement;
      let sendButton = this.sendButton.nativeElement;
      nameField.disabled = true;
      emailField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;
      // sending animation
      const formData = new FormData();
      formData.append('name', nameField.value);
      formData.append('email', emailField.value);
      formData.append('message', messageField.value);

      try {
        const response = await fetch('http://selina-karlin.developerakademie.net/send_mail.php',
          {
            method: 'POST',
            body: formData
          });
          if(response.ok){
            this.clearInput();
            this.sendSucces();
          } else{
            console.error('E-Mail konnte nicht gesendet werden!');
            // Fehlermeldung inkl. Email noch einbinden! :)
          }
      } catch (error) {
        console.error('Error occured while sendig mail:', error)
      }


    }
  }

  // disableFormElements(){
  //   let nameField = this.nameInput.nativeElement;
  //   let emailField = this.emailInput.nativeElement;
  //   let messageField = this.messageInput.nativeElement;
  //   let sendButton = this.sendButton.nativeElement;
  //   nameField.disabled = true;
  //   emailField.disabled = true;
  //   messageField.disabled = true;
  //   sendButton.disabled = true;

  // }

  // getData(){
  //   const formData = new FormData();
  //   formData.append('name', this.contactForm.value.name as string);
  //   formData.append('email', this.contactForm.value.email as string);
  //   formData.append('message', this.contactForm.value.message as string);
  //   console.log(formData);

  //   // this.sendData(formData);
  // }

  clearInput() {
    this.contactForm.reset();
    
  }

  sendSucces() {
    this.messageSucceed = true;
    console.log(this.messageSucceed);
  }

  checkForm() {
    if (this.contactForm.get('email')?.invalid) {
      this.emailError = true;
    }
    if (this.contactForm.get('name')?.invalid) {
      this.nameError = true;
    }
    if (this.contactForm.get('message')?.invalid) {
      this.messageError = true;
    }
    if (this.contactForm.get('message')?.invalid) {
      this.checkBoxError = true;
    }
    if (this.contactForm.get('email')?.valid && this.contactForm.get('name')?.valid && this.contactForm.get('message')?.valid && this.contactForm.get('message')?.valid) {
      this.formIsCorrect = true;
    }
  }

  isFieldValid(fieldName: string) {
    let input = this.contactForm.get(fieldName);
    return input?.invalid && input?.touched;
  }
}
