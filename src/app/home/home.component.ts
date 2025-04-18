import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './supplier.model';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  dtOptions: Config = {};

  suppliers: Supplier[] = [];

  constructor(private suppliersService: SuppliersService) {}

  ngOnInit(): void {
    this.dtOptions = {
      autoWidth: true,
      paging: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      searching: true,
      order: [[0, 'asc']],
    };

    this.suppliersService.getSuppliersList().subscribe((data) => {
      this.suppliers = data;
    });
  }

  editSupplier(id: number) {
    // Implement edit functionality here
    console.log('Edit supplier with ID:', id);
  }

  deleteSupplier(id: number) {
    // Implement delete functionality here
    console.log('Delete supplier with ID:', id);
  }
}
