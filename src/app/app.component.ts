import { Component } from '@angular/core';
import {
  MatDialog,
  // MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';

const dialogConfig: MatDialogConfig = {
  width: '300px',
  height: '400px',
  hasBackdrop: true,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // private matDialogRef!: MatDialogRef<CustomerServiceDialogComponent>;

  constructor(private readonly matDialog: MatDialog) {}
}
