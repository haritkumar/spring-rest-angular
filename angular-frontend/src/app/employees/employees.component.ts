import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  employees: Observable<[]>;
  ngOnInit() {
    this.http.get<any>('http://localhost:5000/api/v1/employees').subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }


}
