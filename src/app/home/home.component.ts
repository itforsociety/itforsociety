import { Component, OnInit } from '@angular/core';
import { mixinColor } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   //$("#header").css("background-color", "blue");
  }

  

}
