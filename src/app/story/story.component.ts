import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { StoriesService } from '../services/stories.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title} from '@angular/platform-browser';
import { FacebookService } from 'ngx-facebook';



@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: Story = new Story();
  

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private fb: FacebookService
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.story = new Story (
        this.storiesService.getStoriesByID(Number(params.get('story_id')))        
      );
      this.title.setTitle(this.story.story_title + " | ITforSociety");
      this.meta.updateTag({ name: this.story.story_title, content: this.story.story_subtitle });
      this.meta.updateTag({ content: "itforsociety.com/story/" + this.story.story_id + "/" + this.story.story_title },'property="og:url"');
      this.meta.updateTag({ content: this.story.story_og_image, property: "og:image"});
      this.meta.updateTag({ content: "SDGs",property: "og:description"});
      this.meta.updateTag({ name: 'twitter:description', content: "desccirsda" });
      this.meta.updateTag({ name: 'twitter:image', content: this.story.story_og_image });
    });
    
    this.meta.addTag({ name: 'twitter:title', content: "vani" });

  }

  shareFB(){
    
/*     this.fb.ui({
      method: 'share_open_graph',
      action_type: 'og.shares',
      href: 'http://localhost:4200/story/1/sdg',
      action_properties: JSON.stringify({
        object : {
          'og:url':  "itforsociety.com/story/" + this.story.story_id + "/" + this.story.story_title,
          'og:description':this.story.story_title,
          'og:image': this.story.story_og_image
        }
      })
    }); */
  }
}
