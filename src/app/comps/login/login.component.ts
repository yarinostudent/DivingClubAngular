import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog'
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("f") myForm: any;
  color = "rgb(0, 38, 78)";
  constructor(private userSer: UsersService, private notifySer: NotificationService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSub(): void {
    if (this.myForm.form.status == "VALID") {
      this.userSer.userLogin(this.myForm.form.value);
    } else {
      return this.notifySer.showWarning("Please Fix The Details", "Invalid Form Details")
    }
  }
  openDialog(): void {
    this.dialog.open(SignupComponent,{panelClass: 'custom-modalbox',autoFocus: false});
  }
}