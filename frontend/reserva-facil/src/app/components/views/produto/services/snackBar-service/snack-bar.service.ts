import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  createSnackBar(message: string): void {
    this.snackBar.open(
      message,
      "Fechar",
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      }
    )
  }

}
