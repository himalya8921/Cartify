import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthModel } from 'src/app/Models/auth.model';
import { UserDashboardRoutingModule } from 'src/app/Modules/user-dashboard/user-dashboard-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  public emailValidations: string;
  public passwordValidations: string;
  public roleId: string;
  constructor(private fb: FormBuilder,
      private _authService : AuthService,
      private router: Router) {
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
            localStorage.setItem('role', response.role);
            this.roleId = response.role;
            console.log(response.token);
            console.log(response.role);
            console.log(this.roleId);
            alert('success');
            if(this.roleId == "1"){
              this.router.navigate(['/admin']);
            }else if(this.roleId == "0"){
              this.router.navigate(['/public']);
            }
          }, 
          error => {
            alert('error');
          });
        } else {
          alert('Some Mistake');
        }
  }

}
