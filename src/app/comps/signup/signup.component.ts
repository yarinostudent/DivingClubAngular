import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm: any;
  constructor(private userSer: UsersService, private route: Router) { }

  ngOnInit(): void {
  }

  onSub(): void {
    if (this.myForm.form.status == "VALID") {
      this.userSer.userSignUp(this.myForm.form.value);
      this.route.navigate(['/login'])
    }
  }
}