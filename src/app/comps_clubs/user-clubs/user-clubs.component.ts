import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClubsService } from 'src/app/services/clubs.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-clubs',
  templateUrl: './user-clubs.component.html',
  styleUrls: ['./user-clubs.component.css']
})
export class UserClubsComponent implements OnInit {
  myClubs_list: any[] = [];
  noClubs: any;
  //pagination
  selectedSort: any;
  club_length: any[] = [];
  currentPage: any = 0;
  constructor(private apiSer: ApiService, private clubSer: ClubsService,private notifySer:NotificationService) { }

  ngOnInit(): void {
    this.getMyClubs();
    this.selectedSort = this.clubSer.selectedSort;

  }

  getMyClubs(): any {
    let url = "https://diving-club-api.herokuapp.com/clubs/myClubs"
    this.myClubs_list.splice(0, this.myClubs_list.length);
    this.apiSer.getHeader(url).subscribe((res: any) => {
      this.myClubs_list.push(...res);
    })
    if (this.myClubs_list.length == 0) {
      this.noClubs = true;
    } else {
      this.noClubs = false;
    }
  }

  changePage(i: any): void {
    this.selectedSort = this.clubSer.selectedSort;
    let url = `https://diving-club-api.herokuapp.com/clubs/info/?page=${i}&s=${this.clubSer.inputSearch}&sort=${this.selectedSort}`;
    this.clubSer.doApiClubList(url);
    this.myClubs_list = this.clubSer.getClubsAr();
    this.currentPage = i;
    this.clubSer.page = i;
  }

  delClub(_id: any): any {
    if (confirm("Are You Sure?")) {
      let url = `https://diving-club-api.herokuapp.com/clubs/${_id}`
      this.apiSer.delHeader(url).subscribe((res: any) => {
        this.notifySer.showError("Deleted","");
        console.log(res);
        this.getMyClubs();
      },
        (rej: any) => {
          console.log(rej);
        });
    }
  }
}