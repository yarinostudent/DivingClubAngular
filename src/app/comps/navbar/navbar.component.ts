import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  isLoggedIn: any;
  isMenuCollapsed: boolean = false;
  user_obj: any;
  constructor(private userSer: UsersService) { }

  ngOnInit(): void {
    if (localStorage["tok"]) {
      this.userSer.doApiUserInfo();
      this.user_obj = this.userSer.getUserInfo();
    }
  }

  ngDoCheck(): void {
    if (localStorage["tok"]) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
  

  toggleMenu():void{
    this.isMenuCollapsed = !this.isMenuCollapsed
  }

  logout(): void {
    this.userSer.logOut();
  }
}
