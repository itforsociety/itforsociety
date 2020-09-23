import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { StoriesService } from '../services/stories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: Story = new Story();

  constructor(private storiesService: StoriesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.story = new Story (
        this.storiesService.getStoriesByID(Number(params.get('story_id')))
      );
    });
  }
}
