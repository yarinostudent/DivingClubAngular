import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  userInfo: any = {};
  constructor(private userSer: UsersService) { }

  ngOnInit(): void {
    if (localStorage["tok"]) {
      this.userSer.doApiUserInfo();
      this.userInfo = this.userSer.getUserInfo();
    }
  }
}