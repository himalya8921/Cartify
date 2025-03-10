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

  // SignUpUser(authModel: AuthModel) {
  //   fetch(this.signUpUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(authModel)
  //   })
  //   .then(response => response.json()) 
  //   .then(data => {
  //     console.log("Fetch Response:", data);
  //     if (data === "Success") {
  //       alert("User signed up successfully!");
  //     } else {
  //       throw new Error(data); 
  //     }
  //   })
  //   .catch(error => {
  //     console.error("Fetch Error:", error);
  //     alert("Sign-up failed: " + error.message);
  //   });
  // }

  // Login(model: LoginModel): Observable<any> {
  //   return this.http.post(this.url, model)
  //     .pipe(map(response => response));
  // }

  SignUpUser(authModel: AuthModel) {
    fetch(this.signUpUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authModel)
    })
      .then(response => {
        // Ensure response is JSON before parsing
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          return response.text().then(text => { throw new Error(text); });
        }
        return response.json();
      })
      .then(data => {
        if (data.message === "Success") {  // ✅ Check `data.message`
          this.showNotification("✅ Success", "User signed up successfully!");
        } else {
          this.showNotification("❌ Error", "Sign-up failed: " + data.message); // ✅ Show error message
        }
      })
      .catch(error => {
        this.showNotification("❌ Error", "Fetch Error: " + error.message);
      });
  }
  
  // SignUpUser(model: AuthModel): Observable<any> {
  //   return this.http.post(this.signUpUrl, model)
  //     .pipe(map(response => response));
  // }
  
  // Function to show a notification
  showNotification(title: string, message: string) {
    if (Notification.permission === "granted") {
      new Notification(title, { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, { body: message });
        }
      });
    }
  }
  
  
}
