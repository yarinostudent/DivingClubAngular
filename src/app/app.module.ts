import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './comps/signup/signup.component';
import { LoginComponent } from './comps/login/login.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HeaderComponent } from './comps/header/header.component';
import { UserInfoComponent } from './comps/user-info/user-info.component';
import { ClubListComponent } from './comps_clubs/club-list/club-list.component';
import { AppDivingClubsComponent } from './comps/app-diving-clubs/app-diving-clubs.component';
import { UserClubsComponent } from './comps_clubs/user-clubs/user-clubs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditClubComponent } from './comps_clubs/edit-club/edit-club.component';
import { AddClubComponent } from './comps_clubs/add-club/add-club.component';
import { FooterComponent } from './comps_clubs/footer/footer.component';
import { QuerisNavComponent } from './comps_clubs/queris-nav/queris-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    HeaderComponent,
    UserInfoComponent,
    ClubListComponent,
    AppDivingClubsComponent,
    UserClubsComponent,
    EditClubComponent,
    AddClubComponent,
    FooterComponent,
    QuerisNavComponent
  ],
  entryComponents: [LoginComponent,SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
