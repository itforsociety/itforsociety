import { Injectable } from '@angular/core';
import {Story} from '../models/story.model'

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  //story: Story = [];

  stories: Story[] = [{
    story_id: 1,
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
    story_id: 5,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_avatar: '../../assets/IT for society circle.png',
    story_image: '../../assets/IT for society circle.png',
    story_content: 'As of May 2018, 68.5 million people around the world have been forcibly displaced from their homes due to armed conflict and natural disaster.  🌪🔥💔'+
    'Of these, 25.4 million are refugees, and more than 50 percent are children 🙅‍♀️🙅🙇‍♀️🙇‍♂️'+
    'For helping missing people International Rescue Committee , Save the Children UK and UNICEF developed child protection information management system (CPIMS). 👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦'+
    'To know more about Primero visit primero.org '
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
