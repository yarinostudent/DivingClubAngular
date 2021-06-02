import { Injectable } from '@angular/core';
import { sortBy, upperFirst } from 'lodash';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  club_list: any[] = [];
  club_obj: any = {};
  clubLength: any[] = [];

  //queris
  page: any = 0;
  inputSearch: any = '';
  selectedSort: any;
  constructor(private apiSer: ApiService) { }

  getClubsAr(): any {
    return this.club_list;
  }

  getClubObj(): any {
    return this.club_obj;
  }

  getClubsLength(): any {
    return this.clubLength;
  }


  doApiClubList(_url: any): any {
    this.club_list.splice(0, this.club_list.length);
    this.clubLength.splice(0, this.clubLength.length);
    this.apiSer.getRequest(_url).subscribe(
      (res: any) => {
        this.club_list.push(...res.clubs);
        for (let i = 0; i < Math.ceil(res.clubsLength / 4); i++) {
          this.clubLength.push(i + 1);
        }
      },
      (rej: any) => {
        console.log(rej)
      })
  }


}