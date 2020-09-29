import { Component, OnInit } from '@angular/core';
import {Story} from '../models/story.model' 
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

 

  constructor(private storiesService: StoriesService) {
  }

  numberOfColumns: number = 3;
  rowHeight: string = '1:1.5';
  stories: Story[];

  ngOnInit(): void {
    this.stories = this.storiesService.getAllStories();
    if(window.innerWidth <= 400){
      this.numberOfColumns = 1;
      this.rowHeight = '1:1.4';
    }
    else if(window.innerWidth <= 800){
      this.numberOfColumns = 1;
      this.rowHeight = '1:1.2';
    }
    else if(window.innerWidth <= 1300){
      this.numberOfColumns = 2;
      this.rowHeight = '1:1.5';
    }
    else{
      this.numberOfColumns = 3
      this.rowHeight = '1:1.3';
    }
  }

  onResize(event) {
    
    if(window.innerWidth <= 400){
      this.numberOfColumns = 1;
      this.rowHeight = '1:1.4';
    }
    else if(window.innerWidth <= 800){
      this.numberOfColumns = 1;
      this.rowHeight = '1:1.2';
    }
    else if(event.target.innerWidth <= 1300){
      this.numberOfColumns = 2;
      this.rowHeight = '1:1.5';
    }
    else{
      this.numberOfColumns = 3;
      this.rowHeight = '1:1.3';
    }
    //this.numberOfColumns = (event.target.innerWidth <= 1240) ? 1 : 3;
  }

}
