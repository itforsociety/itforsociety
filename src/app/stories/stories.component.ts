import { Component, OnInit } from '@angular/core';
import {Story} from '../models/story.model' 
import { StoriesService } from '../services/stories.service';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

 

  constructor(
    private storiesService: StoriesService,
    private meta:Meta,
    private title:Title
    ) {
  }

  numberOfColumns: number = 3;
  rowHeight: string = '1:1.5';
  stories: Story[];

  ngOnInit(): void {
    this.title.setTitle("Stories" + " | IT for Society");
    this.meta.updateTag({ name: "title", content: "Stories" + " | IT for Society" });
    this.meta.updateTag({ name: "description", content: "praisworthy stories about tech for good and more" });
    this.meta.updateTag({ property: "og:title",content: "Stories" + " | IT for Society"});
    this.meta.updateTag({ property: "og:url",content: "https://itforsociety.com/stories"});
    this.meta.updateTag({ property: "og:description",content: "praisworthy stories about tech for good and more"});
    this.meta.updateTag({ name: "twitter:title",content: "Stories" + " | IT for Society"});
    this.meta.updateTag({ name: "twitter:url",content: "https://itforsociety.com/stories"});
    this.meta.updateTag({ name: 'twitter:description', content: "praisworthy stories about tech for good and more" });


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
