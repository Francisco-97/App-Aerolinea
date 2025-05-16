import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { error } from 'console';
import { NotificacionesService } from '../servios/notificaciones.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatDialogModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  activeTab: 'login' | 'register' = 'login';
  loginForm: FormGroup;
  registerForm: FormGroup;
  Name: string;
  password: string;
  //dialogref = Inject(MatDialogRef)
  algo = Inject(MatDialog);



  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    //public DialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notify: NotificacionesService,
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  switchTab(tab: 'login' | 'register'){
    this.activeTab = tab;
  }

  onLogin(){
    if(this.Name === "1234" || this.password === "1234"){
      this.Name = "Usuario Minorista";
      this.cerrar(this.Name)
    }
    else if(this.Name === "F1234" || this.password === "1234"){
      this.Name = "Usuario Corporativo";
      this.cerrar(this.Name)
    }
    else{
      console.log("Error");
      this.notify.Denegado()
      this.Name = "";
      this.password = "";
    }
  }

  onRegister(){

  }

  cerrar(result: any){
    this.dialogRef.close(result)
  }
}
