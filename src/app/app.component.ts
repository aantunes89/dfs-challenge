import { Component } from '@angular/core';
import {
  MatDialog,
  // MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { CustomerServiceDialogComponent } from './customer-service/customer-service-dialog.component';

const dialogConfig: MatDialogConfig = {
  width: '600px',
  hasBackdrop: true,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // private matDialogRef!: MatDialogRef<CustomerServiceDialogComponent>;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerServiceDialogComponent, {
      ...dialogConfig, // Set the desired width of the modal
      // You can also pass additional data to the modal if needed
      // data: { someData: 'Your data here' },
    });

    // You can subscribe to the 'afterClosed' event to perform actions after the dialog is closed
    dialogRef.afterClosed().subscribe((result) => {
      // Do something with the result if needed
      console.log('Dialog closed with result:', result);
    });
  }
}
