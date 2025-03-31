import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from '../../services/user-dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productTypes: any[] = [];
  filteredProductTypes: any[] = [];
  pagedProductTypes: any[] = [];
  pageSize: number = 1;
  currentPage: number = 0;
  totalPages: number = 0;
  startItem: number = 0;
  endItem: number = 0;
  totalItems: number = 0;

  constructor(private _userDashboard : UserDashboardService) { }

  ngOnInit() {
    this.getProductTypes();
  }
  getProductTypes(): void {
    this._userDashboard.GetAllProductType().subscribe({
      next: (response) => {
        if (response && response.message) {
          this.productTypes = response.message;
          this.filteredProductTypes = [...this.productTypes]; // Initialize filtered list
          this.totalItems = this.filteredProductTypes.length;
          this.calculateTotalPages();
          this.updatePagedData(); 
        } else {
          this.productTypes = [];
          this.filteredProductTypes = [];
        }
      },
      error: (error) => {
        console.error("Error fetching product types:", error);
      }
    });
  }

  filterData(searchText: string) {
    console.log(searchText);
    this.filteredProductTypes = this.productTypes.filter(item =>
      item.productTypeName.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(this.filteredProductTypes);
     // Recalculate total items and total pages
  this.totalItems = this.filteredProductTypes.length;
  this.calculateTotalPages();

  // Reset to first page after filtering
  this.currentPage = 0;
  this.updatePagedData();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredProductTypes.length / this.pageSize);
  }

  updatePagedData() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedProductTypes = this.filteredProductTypes.slice(startIndex, endIndex);
     // Update the displayed item range
     this.startItem = this.totalItems > 0 ? startIndex + 1 : 0;
     this.endItem = endIndex;
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagedData();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagedData();
    }
  }

  sortAsc(column: string) {
    this.filteredProductTypes = [...this.filteredProductTypes].sort((p1, p2) => {
      let valueA = p1[column];
      let valueB = p2[column];
  
      if (typeof valueA === 'boolean') {
        valueA = valueA ? 1 : 0;
        valueB = valueB ? 1 : 0;
      }
  
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
  
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
  
    this.currentPage = 0; // Reset to first page
    this.updatePagedData(); // Update displayed data
  }
  
  sortDesc(column: string) {
    console.log(column);
    this.filteredProductTypes = [...this.filteredProductTypes].sort((p1, p2) => {
      let valueA = p1[column];
      let valueB = p2[column];
  
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
      
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    });
  
    this.currentPage = 0; // Reset to first page
    this.updatePagedData(); // Update displayed data
  }
  
  
}
