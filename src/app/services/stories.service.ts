import { Injectable } from '@angular/core';
import {Story} from '../models/story.model'

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  //story: Story = [];

  stories: Story[] = [{
    story_id: 5,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/primero.PNG',
    story_content: 'As of May 2018, 68.5 million people around the world have been forcibly displaced from their homes due to armed conflict and natural disaster.  🌪🔥💔'+
    'Of these, 25.4 million are refugees, and more than 50 percent are children 🙅‍♀️🙅🙇‍♀️🙇‍♂️'+
    'For helping missing people International Rescue Committee , Save the Children UK and UNICEF developed child protection information management system (CPIMS). 👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦'+
    'To know more about Primero visit primero.org '
  },
  {
    story_id: 4,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/IT for society circle.png',
    story_content: 'As of May 2018, 68.5 million people around the world have been forcibly displaced from their homes due to armed conflict and natural disaster.  🌪🔥💔'+
    'Of these, 25.4 million are refugees, and more than 50 percent are children 🙅‍♀️🙅🙇‍♀️🙇‍♂️'+
    'For helping missing people International Rescue Committee , Save the Children UK and UNICEF developed child protection information management system (CPIMS). 👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦'+
    'To know more about Primero visit primero.org '
  },
  {
    story_id: 3,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/IT for society circle.png',
    story_content: 'As of May 2018, 68.5 million people around the world have been forcibly displaced from their homes due to armed conflict and natural disaster.  🌪🔥💔'+
    'Of these, 25.4 million are refugees, and more than 50 percent are children 🙅‍♀️🙅🙇‍♀️🙇‍♂️'+
    'For helping missing people International Rescue Committee , Save the Children UK and UNICEF developed child protection information management system (CPIMS). 👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦'+
    'To know more about Primero visit primero.org '
  },
  {
    story_id: 2,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/IT for society circle.png',
    story_content: 'As of May 2018, 68.5 million people around the world have been forcibly displaced from their homes due to armed conflict and natural disaster.  🌪🔥💔'+
    'Of these, 25.4 million are refugees, and more than 50 percent are children 🙅‍♀️🙅🙇‍♀️🙇‍♂️'+
    'For helping missing people International Rescue Committee , Save the Children UK and UNICEF developed child protection information management system (CPIMS). 👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦'+
    'To know more about Primero visit primero.org '
  },
  {
    story_id: 1,
    story_title: 'Sustainable Development Goals (SDGs)',
    story_subtitle: 'Goals established by United Nations',
    story_avatar: '../../assets/SDG/SDG_Wheel_Transparent_WEB.png',
    story_image: '../../assets/SDG/SDG_Poster_2019_goals_WEB_transparent.png',
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
