import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './Modules/auth/auth.interceptor';
import { GridModule } from '@progress/kendo-angular-grid';
import { ComponentNameComponent } from './app/Modules/user-dashboard/component-name.component';
import { NewComponentComponent } from './app/Modules/user-dashboard/new-component.component';

export function tokenGetter() {
  return localStorage.getItem('jwt_token');
}
@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    NewComponentComponent
  ],
  imports: [
    GridModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5173"], // Replace with actual API domain if needed
        disallowedRoutes: ["localhost:5173/api/auth/login"]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
