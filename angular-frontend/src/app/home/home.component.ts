import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.homeService().subscribe( (result) => {
      this.message = result.content;
    });
  }

}
