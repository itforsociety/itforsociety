import { Component, OnInit } from '@angular/core';
import {Story} from '../models/story.model' 

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  story: Story = new Story ({
    story_id: 1,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/IT for society circle.png',
    story_content: 'As of May 2018, 68.5 million people around the world have been forcibly displaced from their homes due to armed conflict and natural disaster.  🌪🔥💔'+
    'Of these, 25.4 million are refugees, and more than 50 percent are children 🙅‍♀️🙅🙇‍♀️🙇‍♂️'+
    'For helping missing people International Rescue Committee , Save the Children UK and UNICEF developed child protection information management system (CPIMS). 👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦'+
    'To know more about Primero visit primero.org '
  });

  constructor() { }

  numberOfColumns: number = 3;
  rowHeight: string = '1:1.5';

  ngOnInit(): void {
    if(window.innerWidth <= 700){
      this.numberOfColumns = 1;
      this.rowHeight = '1:1.2';
    }
    else if(window.innerWidth <= 1240){
      this.numberOfColumns = 2;
      this.rowHeight = '1:1.5';
    }
    else{
      this.numberOfColumns = 3
      this.rowHeight = '1:1.3';
    }
  }

  onResize(event) {
    
    if(event.target.innerWidth <= 750){
      this.numberOfColumns = 1;
      this.rowHeight = '1:1.2';
    }
    else if(event.target.innerWidth <= 1240){
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
