import { Component, ViewChild, ElementRef, Renderer2, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements AfterViewInit {



  /**
   * Assigns native element references to the HTML-elements, so they can be used or manipulated later.
   */
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
    messageField: new FormControl('', Validators.required),
    privacyPolicy: new FormControl(false, Validators.requiredTrue)
  });

  // if data from form can not be sent, it'll show a textfield with instructions for user
  showErrorMessage = false;

  // if form is invalid, it'll point to user the invalid fields 
  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;
  checkBoxError: boolean = false;
  
  formIsCorrect: boolean = false;
  
  // boolean for sending animations
  messageSucceed: boolean = false;
  sendingAnimation: boolean = false;
  showButtonBorder: boolean = true;

  // references to DOM for en-/disabling input/button
  nameField!: { value: string | Blob; disabled: boolean; };
  emailField!: { value: string | Blob; disabled: boolean; };
  messageField!: { value: string | Blob; disabled: boolean; };
  sendBtn!: { disabled: boolean; };


  /**
   * Checks if the form is filled correctly. If true: calls other functions for animation and sending data.
   * @async
   * @returns {*}
   */
  async sendMail() {
    this.checkForm();
    if (this.formIsCorrect === false) {
      return;
    }
    this.showButtonBorder = false;
    this.toggleCheckboxPolicy();
    this.playSendingAnimation();
    this.disablingInputFields();
    

    const formData = this.getFormData();
    setTimeout(() => {
      this.sendData(formData);
    }, 3000);
  }


  /**
   * Creates an instance of FormData which will be returned at the end of the function.
   * Appends key-value pairs to it which contain the values of the form.
   * @returns {*}
   */
  getFormData() {
    const formData = new FormData();
    formData.append('name', this.nameField.value);
    formData.append('email', this.emailField.value);
    formData.append('message', this.messageField.value);

    return formData;
  }


  /**
   * Disables the form elements to prevent interaction with user while data is being processed.
   */
  disablingInputFields() {
    this.nameField.disabled = true;
    this.emailField.disabled = true;
    this.messageField.disabled = true;
    this.sendBtn.disabled = true;
  }


  /**
   * Sends a POST request with the provided FormData as the request body.
   * If the response is successful (status code 200) it calls several functions to handle the consequences like stopping animations/clearing inputs. 
   * @async
   * @param {FormData} formData
   * @returns {*}
   */
  async sendData(formData: FormData): Promise<any> {
    try {
      const response = await fetch('https://selinakarlin.de/send_mail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        this.clearInput();
        this.sendSucces();
        this.stopPlayingAnimation();
      } else {
        this.addErrorToButton();
        this.showErrorMessage = true;
      }
    } catch (error) {
      console.error('Error occured while sendig mail:', error)
    }
  }


  /**
   * Resets form
   */
  clearInput() {
    this.contactForm.reset();
  }


  /**
   * Resets error flags.
   */
  clearErrors() {
    this.emailError = false;
    this.nameError = false;
    this.messageError = false;
    this.checkBoxError = false;
  }


  /**
   * Sets boolean according to fulfilled response from server.
   */
  sendSucces() {
    this.messageSucceed = true;
    this.sendingAnimation = false;
  }


  /**
   * Adds class to button that shows user error, if response from server is not fulfilled.
   */
  addErrorToButton() {
    const btn = this.sendButton.nativeElement;
    btn.classList.add('buggy');
  }


  /**
   * Checks all formfields according to validity to show error messages for user instructions.
   * If all formfields are valid, it sets boolean (formIsCorrect) to true and clears errors. 
   * @date 12/5/2023 - 7:19:18 PM
   */
  checkForm() {
    if (this.contactForm.get('email')?.invalid) {
      this.emailError = true;
    }
    if (this.contactForm.get('name')?.invalid) {
      this.nameError = true;
    }
    if (this.contactForm.get('messageField')?.invalid) {
      this.messageError = true;
    }
    if (this.contactForm.get('privacyPolicy')?.invalid) {
      this.checkBoxError = true;
    }
    if (this.contactForm.get('email')?.valid && this.contactForm.get('name')?.valid && this.contactForm.get('messageField')?.valid && this.contactForm.get('privacyPolicy')?.valid) {
      this.formIsCorrect = true;
      this.clearErrors()
    }
  }


  /**
   * Sets correspondent boolean to tru for the animation to be played.
   * Adds classs to button to show loading status
   */
  playSendingAnimation() {
    this.sendingAnimation = true;
    const btn = this.sendButton.nativeElement;
    btn.classList.add('loading');
  }


  /**
   * Stops the animation of button and shows finished status of form sending.
   */
  stopPlayingAnimation() {
    const btn = this.sendButton.nativeElement;
    btn.classList.remove('loading');
    btn.classList.add('finished');
    setTimeout(() => {
      this.reloadContactForm();
    }, 1500);
  }

  reloadContactForm() {
    this.showButtonBorder = true;
    this.messageSucceed = false;
    this.enablingInputFields();
    this.resetButton();
  }

  enablingInputFields() {
    this.nameField.disabled = false;
    this.emailField.disabled = false;
    this.messageField.disabled = false;
    this.sendBtn.disabled = false;
  }

  resetButton() {
    const btn = this.sendButton.nativeElement;
    btn.classList.remove('finished');
    btn.classList.remove('loading');
    btn.classList.remove('nor-border');
  }


  /**
   * Checks validity according to formControl of contactForm. 
   * If control is invalid and has been touched it returns true otherwise false.
   * @param {string} fieldName
   * @returns {*}
   */
  isFieldValid(fieldName: string) {
    let input = this.contactForm.get(fieldName);
    return input?.invalid && input?.touched;
  }


  /**
   * Toggles value of checkbox in contactForm by getting the value and setting it then to the opposite.
   */
  toggleCheckboxPolicy() {
    let privacyControl = this.contactForm.get('privacyPolicy')?.value;
    this.contactForm.get('privacyPolicy')?.setValue(!privacyControl);
  }
}
