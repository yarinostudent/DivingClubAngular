import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm: any;
  constructor(private userSer: UsersService, private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSub(): void {
    if (this.myForm.form.status == "VALID") {
      this.userSer.userSignUp(this.myForm.form.value);
      this.route.navigate(['/login'])
    }
  }
  openDialog(): void {
    this.dialog.open(LoginComponent,{panelClass: 'custom-modalbox'});
  }
}