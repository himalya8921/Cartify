import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthModel } from 'src/app/Models/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = `${environment.apiUrl}/Auth/SignUp`;

  constructor(private http: HttpClient) { }

  // SignUpUser(authModel: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  //   return this.http.post(this.signUpUrl, authModel, { headers }).pipe(
  //     map(response => response),
  //     catchError(error => {
  //       console.error("Error in API call:", error);
  //       return throwError(error);
  //     })
  //   );
  // }
  
  // SignUpUser(authModel: AuthModel): Observable<any> {
  //   return this.http.post(this.signUpUrl, authModel)
  //     .pipe(map(response => response));
  // }

  // SignUpUser(authModel: AuthModel): Observable<any> {
  //   return this.http.post(this.signUpUrl, authModel, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   }).pipe(map(response => response));
  // }
  // SignUpUser(authModel: AuthModel): Observable<any> {
  //   console.log("Sending request to:", this.signUpUrl);
  //   console.log("Request Body:", authModel);
  
  //   return this.http.post(this.signUpUrl, authModel, {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   }).pipe(
  //     map(response => {
  //       console.log("Response received:", response);
  //       return response;
  //     })
  //   );
  // }

  SignUpUser(authModel: AuthModel) {
    console.log("🚀 Sending request to:", this.signUpUrl);
    console.log("📤 Request Body:", authModel);
  
    fetch(this.signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(authModel)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => console.log("✅ Fetch Response:", data))
      .catch(error => console.error("❌ Fetch Error:", error));
  }
  
  
  
}
