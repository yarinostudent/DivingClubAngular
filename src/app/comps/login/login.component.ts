import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("f") myForm: any;
  isLoggedIn: any;
  constructor(private userSer: UsersService, private notifySer: NotificationService) { }

  ngOnInit(): void {
  }

  onSub(): void {
    if (this.myForm.form.status == "VALID") {
      this.userSer.userLogin(this.myForm.form.value);
    } else {
      return this.notifySer.showWarning("Please Fix The Details", "Invalid Form Details")
    }
  }
}