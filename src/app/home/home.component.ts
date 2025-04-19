import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { AuthServiceImpl } from '../services/auth.service.impl';
import { UsersResponse } from './models/users.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  dataTableOptions: Config = {
    paging: true,
    pageLength: 10,
    processing: true,
    scrollX: true,
    pagingType: 'full_numbers',
    order: [[0, 'asc']],
  };
  loading: boolean = true;
  usersResponse: UsersResponse[] = [];

  datatableTrigger: Subject<any> = new Subject();

  constructor(private auth: AuthServiceImpl,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.auth.getUsers().subscribe((res) => {
      this.usersResponse = res.data;
      this.datatableTrigger.next(this.usersResponse);
      console.log('Users:', this.usersResponse);
      this.loading = false;
    });
  }

  ngAfterViewInit(): void {
    console.log('DataTable configured.');
  }

  ngOnDestroy(): void {
    this.datatableTrigger.unsubscribe();
    
  }

  editUser(id: number) {
    console.log('Edit user:', id);
    this.toastr.info('Edit user: ' + id, 'Info');
  }

  deleteUser(id: number) {
    console.log('Delete user:', id);
    this.toastr.warning('Delete user: ' + id, 'Warning');
  }
}
