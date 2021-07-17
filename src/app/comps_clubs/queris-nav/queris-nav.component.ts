import { Component, OnInit } from '@angular/core';
import { ClubsService } from 'src/app/services/clubs.service';

@Component({
  selector: 'app-queris-nav',
  templateUrl: './queris-nav.component.html',
  styleUrls: ['./queris-nav.component.css']
})
export class QuerisNavComponent implements OnInit {
  inputSearch: any;
  selectedSort: any = 'name';
  url: any;
  club_list: any[] = [];
  constructor(private clubSer: ClubsService) { }

  ngOnInit(): void {
    this.clubSer.selectedSort = this.selectedSort;
    this.club_list = this.clubSer.getClubsAr();
  }


  doSearchAndSort(): void {
    this.clubSer.selectedSort = this.selectedSort;
    if (this.inputSearch) {
      this.clubSer.inputSearch = this.inputSearch;
      this.url = `https://diving-club-api.herokuapp.com/clubs/info/?s=${this.inputSearch}&page=${this.clubSer.page}&sort=${this.selectedSort}`;
    } else if (!this.inputSearch || this.inputSearch === "") {
      this.clubSer.inputSearch = '';
      this.url = `https://diving-club-api.herokuapp.com/clubs/info/?page=${this.clubSer.page}&sort=${this.selectedSort}`;
    }
    this.clubSer.doApiClubList(this.url);
  }
}
