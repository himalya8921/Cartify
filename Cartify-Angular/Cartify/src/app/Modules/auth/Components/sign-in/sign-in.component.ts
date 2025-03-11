import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthModel } from 'src/app/Models/auth.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  public emailValidations: string;
  public passwordValidations: string;
  constructor(private fb: FormBuilder,
      private _authService : AuthService) {
   }

  ngOnInit() {
    this.initForm();
    const email = this.loginForm.get('email');
    email.valueChanges.subscribe(x => {
     this.validateEmail(email);
    });
    const password = this.loginForm.get('password');
    password.valueChanges.subscribe(x => {
     this.validatePassword(password);
    });
  }

  private initForm(): void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
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

  onSubmit(value : any) {
    const authModel : AuthModel = {
          email: value.email,
          password: value.password
        }
        if (this.loginForm.valid) {
          this._authService.SignInUser(authModel).subscribe(response =>{localStorage.setItem('jwt_token', response.token);
            alert('success');
          }, 
          error => {
            alert('error');
          });
        } else {
          alert('Some Mistake');
        }
  }

}
