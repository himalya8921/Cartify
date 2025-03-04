import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  public emailValidations: string;
  public passwordValidations: string;
  public nameValidations: string;
  public phoneValidation: string;
  public addressValidation: string;
  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    this.initForm();
    const email = this.signUpForm.get('email');
    email.valueChanges.subscribe(x => {
     this.validateEmail(email);
    });
    const password = this.signUpForm.get('password');
    password.valueChanges.subscribe(x => {
     this.validatePassword(password);
    });
    const name = this.signUpForm.get('name');
    name.valueChanges.subscribe(x => {
     this.validateName(name);
    });
    const phone = this.signUpForm.get('phoneNumber');
    phone.valueChanges.subscribe(x => {
     this.validatePhone(phone);
    });
    const address = this.signUpForm.get('address');
    address.valueChanges.subscribe(x => {
     this.validateAddress(address);
    });
  }

  private initForm(): void{
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required]]
    });
  }

  private validateEmail(email: AbstractControl): void{
    this.emailValidations = '';
    if(email.errors && (email.touched || email.dirty)){
      if(email.errors.required){
        this.emailValidations = 'This is required';
      }
      else if(email.errors.email){
        this.emailValidations = 'Fill Valid Email';
      }
    }
  }
  private validatePassword(password: AbstractControl): void{
    this.passwordValidations = '';
    if(password.errors && (password.touched || password.dirty)){
      if(password.errors.required){
        this.passwordValidations = 'This is required';
      }
    }
  }
  private validateName(name: AbstractControl): void{
    this.nameValidations = '';
    if(name.errors && (name.touched || name.dirty)){
      if(name.errors.required){
        this.nameValidations = 'This is required';
      }
    }
  }
  private validatePhone(phone: AbstractControl): void{
    this.phoneValidation = '';
    if(phone.errors && (phone.touched || phone.dirty)){
      if(phone.errors.required){
        this.phoneValidation = 'This is required';
      }
    }
  }
  private validateAddress(address: AbstractControl): void{
    this.addressValidation = '';
    if(address.errors && (address.touched || address.dirty)){
      if(address.errors.required){
        this.addressValidation = 'This is required';
      }
    }
  }
  onSubmit() {
    // if (this.signUpForm.valid) {
    //   console.log('Login Data:', this.signUpForm.value);
    //   alert('Login Successful!');
    // } else {
    //   alert('Please fill in all required fields correctly.');
    // }
  }
 
}
