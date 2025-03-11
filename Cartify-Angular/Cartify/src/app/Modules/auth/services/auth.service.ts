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

  SignUpUser(authModel: AuthModel) {
    //console.log("Sending request to API with:", authModel); // Debugging

    fetch(this.signUpUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authModel)
    })
      .then(response => {
        //console.log("Response Status:", response.status); // Debugging
        //console.log("Response Headers:", response.headers); // Debugging

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          return response.text().then(text => { throw new Error(text); });
        }
        return response.json();
      })
      .then(data => {
        console.log("Response Data:", data); // Debugging
        if (data.message === "Success") {
          this.showNotification("✅ Success", "User signed up successfully!");
        } else {
          this.showNotification("❌ Error", "Sign-up failed: " + data.message);
        }
      })
      .catch(error => {
        console.error("Fetch Error:", error); // Debugging
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
