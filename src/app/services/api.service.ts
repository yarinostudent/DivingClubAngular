import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private notifySer: NotificationService) { }

  getRequest(_url: any): any {
    return this.http.get(_url);
  }

  getHeader(_url: any): any {
    if (localStorage["tok"]) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['tok'],
        'content-type': 'application/json'
      })
      return this.http.get(_url, { headers: xAuth })
    }
  }

  postRequest(_url: any, _bodyData: any): any {
    return this.http.post(_url, _bodyData);

  }

  postHeader(_url: any, _bodyData: any): any {
    if (localStorage["tok"]) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['tok'],
        'content-type': 'application/json'
      })
      return this.http.post(_url, _bodyData, { headers: xAuth })
    } else {
      this.notifySer.showWarning("You Must Login First", "Guest");
    }
  }

  putHeader(_url: any, _bodyData: any): any {
    if (localStorage["tok"]) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['tok'],
        'content-type': 'application/json'
      })
      return this.http.put(_url, _bodyData, { headers: xAuth })
    } else {
      this.notifySer.showWarning("You Must Login First", "Guest");
    }
  }

  delHeader(_url: any): any {
    if (localStorage["tok"]) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['tok'],
        'content-type': 'application/json'
      })
      return this.http.delete(_url, { headers: xAuth })
    } else {
      this.notifySer.showWarning("You Must Login First", "Guest");
    }
  }
}