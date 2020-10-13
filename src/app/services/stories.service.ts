import { Injectable } from '@angular/core';
import {Story} from '../models/story.model'

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  //story: Story = [];

  stories: Story[] = [{
    story_id: 3,
    story_custom: false,
    story_title: 'Create your website sitemap and robots.txt in Angular',
    story_subtitle: 'How does Google know about your website?',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/stories/How does Google find my website.jpg',
    story_og_image:'assets/stories/How does Google find my website.jpg',
    story_content: 'Google searches your website with Web Crawler, also known as spider or spiderbot. When the website is found, it is starting to crawl your page. Google renders the page and analyses both the text and non-text content and overall visual layout to decide where it should appear in Search results.'
  },{
    story_id: 2,
    story_custom: false,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/primero.PNG',
    story_og_image:'assets/primero.PNG',
    story_content: 'As of May 2018, 68.5 million people around the world have been forcibly displaced from their homes due to armed conflict and natural disaster.  🌪🔥💔'+
    'Of these, 25.4 million are refugees, and more than 50 percent are children 🙅‍♀️🙅🙇‍♀️🙇‍♂️'+
    'For helping missing people International Rescue Committee , Save the Children UK and UNICEF developed child protection information management system (CPIMS).One of the products is an open source software platform Primero, originally designed to facilitate family tracing and reunification (FTR) of children in emergencies.'+
    'In Primero social workers can report missing child 👶 in the system, as well as parent/cousin  👩‍🦰  searching for child. The system then helps to track down and reunite the families.'+
    'To know more about Primero visit primero.org '
  },
  {
    story_id: 1,
    story_custom: true,
    story_title: 'Sustainable Development Goals (SDGs)',
    story_subtitle: 'Goals established by United Nations',
    story_avatar: '../../assets/SDG/SDG_Wheel_Transparent_WEB.png',
    story_image: '../../assets/SDG/SDG_Poster_2019_goals_WEB_transparent.png',
    story_og_image:'assets/SDG/SDG_Poster_2019_goals_WEB_transparent.png',
    story_content: 'Sustainable Development Goals (SDGs) are the blueprint to achieve a better and more sustainable future for all. After concluding Millenium Development Goals agenda in 2015, United Nations created new agenda to achieve 17 goals by 2030. The 17 goals have 169 targets and 247 indicators  '
  }];

  
  getStoriesByID(story_id: number): Story {
    return this.stories
      .filter(todo => todo.story_id === story_id)
      .pop();
  }

  getAllStories(): Story[] {
    return this.stories;
  }

}
