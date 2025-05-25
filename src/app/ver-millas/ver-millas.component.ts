import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-ver-millas',
  imports: [MatDialogContent, MatDialogClose, MatDialogTitle, MatListModule],
  templateUrl: './ver-millas.component.html',
  styleUrl: './ver-millas.component.scss'
})
export class VerMillasComponent {
  readonly dialogref = Inject(MatDialogRef<VerMillasComponent>)

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any){

  }
}
