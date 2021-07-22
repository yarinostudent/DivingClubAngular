import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { SignupComponent } from './comps/signup/signup.component';
import { UserInfoComponent } from './comps/user-info/user-info.component';
import { AddClubComponent } from './comps_clubs/add-club/add-club.component';
import { ClubListComponent } from './comps_clubs/club-list/club-list.component';
import { EditClubComponent } from './comps_clubs/edit-club/edit-club.component';
import { UserClubsComponent } from './comps_clubs/user-clubs/user-clubs.component';


const routes: Routes = [
  { path: "", component: ClubListComponent },
  { path: "userInfo", component: UserInfoComponent },
  { path: "myClubs", component: UserClubsComponent },
  { path: "addClub", component: AddClubComponent },
  { path: "editClub/:id", component: EditClubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
