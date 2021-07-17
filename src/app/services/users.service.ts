import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userInfo: any = {};
  constructor(private apiSer: ApiService, private route: Router, private notifySer: NotificationService, public dialog: MatDialog) { }


  getUserInfo(): void {
    return this.userInfo;
  }

  //Post Name, Email & Password
  userSignUp(_bodyData: any): void {
    let url = "https://diving-club-api.herokuapp.com/users/signup";
    this.apiSer.postRequest(url, _bodyData).subscribe(
    (res: any) => {
      this.dialog.closeAll();
      this.notifySer.showSuccess("Signed Up Successfully", "Success")
    },
      (rej: any) => {
        if (rej.error.name == "MongoError") {
          return this.notifySer.showWarning("Email Already Exists", "Invalid Details");
        }
        console.log(rej.error.name)
        this.notifySer.showError(rej.error.msg, "error");
      });
  }

  //Post Email & Password
  userLogin(_bodyData: any): void {
    let url = "https://diving-club-api.herokuapp.com/users/login";
    this.apiSer.postRequest(url, _bodyData).subscribe((res: any) => {
      localStorage.setItem('tok', res.token);
      this.notifySer.showSuccess("Logged In Successfully", "Success")
      this.dialog.closeAll();
      this.route.navigate(['/userInfo'])
    },
      (rej: any) => {
        this.notifySer.showError(rej.error.msg, "error");
      });
  }


  //Get UserInfo
  doApiUserInfo(): any {
    let url = "https://diving-club-api.herokuapp.com/users/userInfo";
    try {
      this.apiSer.getHeader(url).subscribe(
        (res: any) => {
          for (let key in res) {
            this.userInfo[key] = res[key];
            this.userInfo.createdAt = new Date(this.userInfo.createdAt).toDateString();
          }
        },
        (rej: any) => {
          localStorage.removeItem("tok");
          this.userInfo = {};
          this.notifySer.showError(rej.error.msg, "error");
          this.route.navigate(['/login']);
        })
    } catch (err) {
      this.notifySer.showError(err, "error");
    }
  }


  //Log Out | Removing Token From LocalStorage
  logOut(): void {
    localStorage.removeItem('tok');
    this.userInfo = {};
    this.notifySer.showInfo("Logged Out", "Bye Bye");
    this.route.navigate(['/login']);
  }
}