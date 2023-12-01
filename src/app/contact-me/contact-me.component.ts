import { Component, ViewChild, ElementRef, Renderer2, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.nameField = this.nameInput.nativeElement;
    this.emailField = this.emailInput.nativeElement;
    this.messageField = this.messageInput.nativeElement;
    this.sendBtn = this.sendButton.nativeElement;
  }

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
  sendingAnimation: boolean = false;

  nameField!: { value: string | Blob; disabled: boolean; };
  emailField!: { value: string | Blob; disabled: boolean; };
  messageField!: { value: string | Blob; disabled: boolean; };
  sendBtn!: { disabled: boolean; };

  async sendMail() {
    this.checkForm();
    if (this.formIsCorrect === true) {
      this.playSendingAnimation();
      this.disablingInputFields();

      const formData = this.getFormData();
      setTimeout(() => {
        this.sendData(formData);
      }, 3000);
    }
  }

  getFormData() {
    const formData = new FormData();
    formData.append('name', this.nameField.value);
    formData.append('email', this.emailField.value);
    formData.append('message', this.messageField.value);

    return formData;
  }

  disablingInputFields() {
    this.nameField.disabled = true;
    this.emailField.disabled = true;
    this.messageField.disabled = true;
    this.sendBtn.disabled = true;
  }

  async sendData(formData: FormData) {
    try {
      const response = await fetch('https://selinakarlin.de/send_mail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        this.clearInput();
        this.sendSucces();
        this.stopPlayingAnimation();
        this.toggleCheckboxPolicy();
      } else {
        console.error('E-Mail konnte nicht gesendet werden!');
      }
    } catch (error) {
      console.error('Error occured while sendig mail:', error)
    }


  }

  clearInput() {
    this.contactForm.reset();
  }

  clearErrors() {
    this.emailError = false;
    this.nameError = false
    this.messageError = false
    this.checkBoxError = false
  }

  sendSucces() {
    this.messageSucceed = true;
    this.sendingAnimation = false;
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
    if (this.contactForm.get('privacyPolicy')?.invalid) {
      this.checkBoxError = true;
    }
    if (this.contactForm.get('email')?.valid && this.contactForm.get('name')?.valid && this.contactForm.get('message')?.valid && this.contactForm.get('privacyPolicy')?.valid) {
      this.formIsCorrect = true;
      this.clearErrors()
    }
  }

  playSendingAnimation() {
    this.sendingAnimation = true;
    const btn = this.sendButton.nativeElement;
    btn.classList.add('loading');
  }

  stopPlayingAnimation() {
    const btn = this.sendButton.nativeElement;
    btn.classList.remove('loading');
    btn.classList.add('finished');
  }

  isFieldValid(fieldName: string) {
    let input = this.contactForm.get(fieldName);
    return input?.invalid && input?.touched;
  }

  toggleCheckboxPolicy(){
    let privacyControl = this.contactForm.get('privacyPolicy')?.value;
    this.contactForm.get('privacyPolicy')?.setValue(!privacyControl);
  }
}
