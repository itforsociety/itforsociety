import { Component, OnInit } from '@angular/core';
import {Story} from '../models/story.model' 
import { StoriesService } from '../services/stories.service';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

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
    this.title.setTitle("Quotes" + " | IT for Society");
    this.meta.updateTag({ name: "title", content: "Quotes" + " | IT for Society" });
    this.meta.updateTag({ name: "description", content: "praisworthy quotes about tech for good and more" });
    this.meta.updateTag({ property: "og:title",content: "Quotes" + " | IT for Society"});
    this.meta.updateTag({ property: "og:url",content: "https://itforsociety.com/quotes"});
    this.meta.updateTag({ property: "og:description",content: "praisworthy quotes about tech for good and more"});
    this.meta.updateTag({ name: "twitter:title",content: "Quotes" + " | IT for Society"});
    this.meta.updateTag({ name: "twitter:url",content: "https://itforsociety.com/quotes"});
    this.meta.updateTag({ name: 'twitter:description', content: "praisworthy quotes about tech for good and more" });


    this.stories = this.storiesService.getAllQuotes();
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

