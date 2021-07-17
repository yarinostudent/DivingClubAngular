import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  club_list: any[] = [];
  selectedSort: any;
  
  //pagination
  club_length: any[] = [];
  currentPage: any = 0;
  constructor(private clubSer: ClubsService) { }

  ngOnInit(): void {
    this.selectedSort = this.clubSer.selectedSort;
    let url = `https://diving-club-api.herokuapp.com/clubs/info`
    this.clubSer.doApiClubList(url);
    this.club_list = this.clubSer.getClubsAr();
    this.club_length = this.clubSer.getClubsLength();
  }

  changePage(i: any): void {
    this.selectedSort = this.clubSer.selectedSort;
    console.log(this.clubSer.inputSearch)
    let url;
    if (this.clubSer.inputSearch == '') {
      url = `https://diving-club-api.herokuapp.com/clubs/info/?page=${i}&sort=${this.selectedSort}`;
    } else {
      url = `https://diving-club-api.herokuapp.com/clubs/info/?page=${i}&s=${this.clubSer.inputSearch}&sort=${this.selectedSort}`;
    }
    this.clubSer.doApiClubList(url);
    this.club_list = this.clubSer.getClubsAr();
    this.currentPage = i;
    this.clubSer.page = i;
  }
}