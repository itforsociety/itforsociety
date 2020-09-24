import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  numberOfColumns: number = 2;
  rowHeight: string = '1:1.5';


  ngOnInit(): void {
   
  }

 
}
