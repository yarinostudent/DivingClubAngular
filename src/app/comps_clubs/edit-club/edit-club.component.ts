import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {
  @ViewChild("f") myForm: any;
  club_obj: any = {};
  constructor(private apiSer: ApiService, private route: ActivatedRoute, private router: Router, private notifySer: NotificationService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    let url = `https://diving-club-api.herokuapp.com/clubs/single/${id}`;
    this.doApiEditClub(url);
  }

  onSub(): void {
    if (this.myForm.form.status == "VALID") {
      let id = this.route.snapshot.paramMap.get("id");
      let url = `https://diving-club-api.herokuapp.com/clubs/${id}`;
      let bodyData = this.myForm.form.value;
      let nameData = this.myForm.form.value.name;
      this.apiSer.putHeader(url, bodyData).subscribe((res: any) => {
        this.router.navigate(['/myClubs']);
        this.notifySer.showSuccess("Updated", nameData)
      },
        (rej: any) => {
          return this.notifySer.showError(rej,"There Was A Problem, Try Again Please");
        })

    } else {
      return this.notifySer.showWarning("Please Fix The Details","Invalid Form Details")
    }
  }

  doApiEditClub(_url: any): any {
    this.club_obj = {};
    this.apiSer.getRequest(_url).subscribe(
      (res: any) => {
        for (let key in res) {
          this.club_obj[key] = res[key];
        }
      },
      (rej: any) => {
        return this.notifySer.showError(rej, "There Was A Problem, Try Again Please");
      })
  }

}
