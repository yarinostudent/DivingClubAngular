import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {
  @ViewChild("f") myForm: any;
  constructor(private apiSer: ApiService, private route: Router,private notifySer:NotificationService) { }

  ngOnInit(): void {
  }

  onSub(): void {
    if (this.myForm.form.status == "VALID") {
      let bodyData = this.myForm.form.value;
      console.log(bodyData);
      let url = "https://diving-club-api.herokuapp.com/clubs/newClub";
      this.apiSer.postHeader(url, bodyData).subscribe((res: any) => {
        this.notifySer.showSuccess("Club adding request is being reviewd and awaiting approval",this.myForm.form.value.nameInput)
        this.route.navigate(['/myClubs']);
      },
        (rej: any) => {
          return this.notifySer.showWarning(rej.error.keyValue,"Invalid Details");
        })
    } else {
      return this.notifySer.showWarning("Please Fix The Details", "Invalid Form Details")
    }
  }
}
