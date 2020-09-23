import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: Story = new Story();

  constructor(private storiesService: StoriesService) {
  }

  ngOnInit(): void {
    this.story = new Story (this.storiesService.getStoriesByID(1));
  }

}
