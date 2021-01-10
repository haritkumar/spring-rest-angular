import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  homeService() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin' + ':' + 'password') });
    return this.http.get<Message>('http://localhost:5000/api/v1/employees');
  }
}
