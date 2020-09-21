import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor() { }

  numberOfColumns: number = 3;

  ngOnInit(): void {
    if(window.innerWidth <= 1240){
      this.numberOfColumns = 2;
    }
    else if(window.innerWidth <= 700){
      this.numberOfColumns = 1
    }
    else{
      this.numberOfColumns = 3
    }
  }

  onResize(event) {
    
    if(event.target.innerWidth <= 750){
      this.numberOfColumns = 1;
    }
    else if(event.target.innerWidth <= 1240){
      this.numberOfColumns = 2
    }
    else{
      this.numberOfColumns = 3
    }
    //this.numberOfColumns = (event.target.innerWidth <= 1240) ? 1 : 3;
  }

}
