import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm: any;
  color = "rgb(0, 38, 78)";
  constructor(private userSer: UsersService, private route: Router, private notifySer: NotificationService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSub(): void {
    if (this.myForm.form.status == "VALID") {
      this.userSer.userSignUp(this.myForm.form.value);
      this.route.navigate(['/login'])
    } else {
      return this.notifySer.showWarning("Please Fix The Details", "Invalid Form Details")
    }
  }
  openDialog(): void {
    this.dialog.open(LoginComponent,{panelClass: 'custom-modalbox',autoFocus: false});
  }
}