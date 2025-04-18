// suppliers.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Supplier } from './supplier.model';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  private suppliers: Supplier[] = [
    { id: 1, name: 'Supplier A', contactNumber: '9856548956' },
    { id: 2, name: 'Supplier B', contactNumber: '9856535269' },
    { id: 3, name: 'Supplier C', contactNumber: '9856447856' },
    { id: 4, name: 'Supplier D', contactNumber: '9845687900' },
    { id: 5, name: 'Supplier E', contactNumber: '9845678901' },
    { id: 6, name: 'Supplier F', contactNumber: '9856547890' },
    { id: 7, name: 'Supplier G', contactNumber: '9856541234' },
    { id: 8, name: 'Supplier H', contactNumber: '9856545678' },
    { id: 9, name: 'Supplier I', contactNumber: '9856549876' },
    { id: 10, name: 'Supplier J', contactNumber: '9856543210' },
    { id: 11, name: 'Supplier K', contactNumber: '9856547891' },
    { id: 12, name: 'Supplier L', contactNumber: '9856547892' },
    { id: 13, name: 'Supplier M', contactNumber: '9856547893' },
    { id: 14, name: 'Supplier N', contactNumber: '9856547894' },
    { id: 15, name: 'Supplier O', contactNumber: '9856547895' },
    { id: 16, name: 'Supplier P', contactNumber: '9856547896' },
    { id: 17, name: 'Supplier Q', contactNumber: '9856547897' },
    { id: 18, name: 'Supplier R', contactNumber: '9856547898' },
    { id: 19, name: 'Supplier S', contactNumber: '9856547899' },
    { id: 20, name: 'Supplier T', contactNumber: '9856547800' },
    { id: 21, name: 'Supplier U', contactNumber: '9856547801' },
    { id: 22, name: 'Supplier V', contactNumber: '9856547802' },
    { id: 23, name: 'Supplier W', contactNumber: '9856547803' },
    { id: 24, name: 'Supplier X', contactNumber: '9856547804' },
    { id: 25, name: 'Supplier Y', contactNumber: '9856547805' },
    { id: 26, name: 'Supplier Z', contactNumber: '9856547806' },
    { id: 27, name: 'Supplier AA', contactNumber: '9856547807' },
    { id: 28, name: 'Supplier AB', contactNumber: '9856547808' },
    { id: 29, name: 'Supplier AC', contactNumber: '9856547809' },
    { id: 30, name: 'Supplier AD', contactNumber: '9856547810' },
    { id: 31, name: 'Supplier AE', contactNumber: '9856547811' },
    { id: 32, name: 'Supplier AF', contactNumber: '9856547812' },
    { id: 33, name: 'Supplier AG', contactNumber: '9856547813' },
    { id: 34, name: 'Supplier AH', contactNumber: '9856547814' },
    { id: 35, name: 'Supplier AI', contactNumber: '9856547815' },
    { id: 36, name: 'Supplier AJ', contactNumber: '9856547816' },
    { id: 37, name: 'Supplier AK', contactNumber: '9856547817' },
  ];

  getSuppliersList(): Observable<Supplier[]> {
    return of(this.suppliers);
  }
}

