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

  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    this.initForm();
    const email = this.signUpForm.get('email');
    email.valueChanges.subscribe(x => {
     this.validateEmail(email);
    });
  }

  private initForm(): void{
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(20)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
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

  onSubmit() {
    // if (this.signUpForm.valid) {
    //   console.log('Login Data:', this.signUpForm.value);
    //   alert('Login Successful!');
    // } else {
    //   alert('Please fill in all required fields correctly.');
    // }
  }
 
}
