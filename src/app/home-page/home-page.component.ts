import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  query: string = '';
  constructor() {
    console.log(this.query);
  }

  ngOnInit(): void {}
  onSearchChange($event: any) {
    console.log(this.query);
    //hello world is my thinking going on right now
  }
}
