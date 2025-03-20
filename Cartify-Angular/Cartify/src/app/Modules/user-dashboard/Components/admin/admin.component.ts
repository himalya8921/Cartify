import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from '../../services/user-dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productTypes: any[] = [];
  constructor(private _userDashboard : UserDashboardService) { }

  ngOnInit() {
    this.getProductTypes();
  }
  getProductTypes(): void {
    this._userDashboard.GetAllProductType().subscribe({
      next: (response) => {
        if (response && response.message) {
          this.productTypes = response.message; 
        } else {
          this.productTypes = []; 
        }
        console.log("Product Types:", this.productTypes);
      },
      error: (error) => {
        console.error("Error fetching product types:", error);
      }
    });
  }
}
