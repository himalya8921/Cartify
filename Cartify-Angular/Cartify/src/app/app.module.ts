import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './Modules/auth/auth.interceptor';
import { UserDashboardModule } from './Modules/user-dashboard/user-dashboard.module';
import { AdminProductsComponent } from './Modules/Product/Components/admin-products/admin-products.component';
import { CustomerProductsComponent } from './Modules/Product/Components/customer-products/customer-products.component';

export function tokenGetter() {
  return localStorage.getItem('jwt_token');
}
@NgModule({
  declarations: [
    AppComponent,
    AdminProductsComponent,
    CustomerProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserDashboardModule,
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
