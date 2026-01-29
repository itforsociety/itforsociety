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
    story_custom: false,
    story_title: 'Share the Meal - The Nobel Peace Prize 2020',
    story_subtitle: 'World Food Program was awarded with Nobel peace prize for 2020',
    story_tag: 'wfp',
    story_avatar: '/assets/IT for society circle.png',
    story_image: '/assets/stories/5/wfpNobel.JPG',
    story_og_image:'/assets/stories/5/wfpNobel.JPG',
    story_video_URL:'https://www.youtube.com/embed/efkVY-UyGDM',
    story_content: 'This month were Nobel Prize 2020 awards. Nobel prize for peace was awarded to World Food Programme (WFP). In 2019, the WFP provided assistance to 100 million people in 88 countries who are victims of acute food insecurity and hunger. They archived this, mostly with the help of Share the Meal application, which shows us another great example of IT for Society. Check the video how the Share the Meal application works and install the app to help battle against hunger. https://sharethemeal.org/en/index.html   '
  },{
    story_id: 4,
    story_custom: false,
    story_title: 'Hello Tractor',
    story_subtitle: 'making affordable tractor services for the small farm holders which can not afford to buy one',
    story_tag: 'hellotractor',
    story_avatar: '/assets/IT for society circle.png',
    story_image: '/assets/stories/4/hellotractor.JPG',
    story_og_image:'/assets/stories/4/hellotractor.JPG',
    story_video_URL:'https://www.youtube.com/embed/FZUilc5I0lw',
    story_content: 'You don\'t have a tractor? Don\'t worry you don\'t have to buy one, you can just rent it over "Hello Tractor"! Nigeria 🇳🇬     Great IT platform example in Nigeria 🇳🇬with positive impact on society, it\'s making affordable tractor services for the small farm holders which can\'t afford to buy one. Also great opportunity for Tractor owners to expand their business!         Connecting it with IoT and applications makes the perfect example of IT for Society!         Hello Tractor aims to transform         the agricultural ecosystem,         creating efficiencies         that generate inclusive growth,         reduce poverty,          and help build stronger, more stable economies         read more on:         https://hellotractor.com/ '
  },{
    story_id: 3,
    story_custom: true,
    story_title: 'Create your website sitemap and robots.txt in Angular',
    story_subtitle: 'How does Google know about your website?',
    story_tag: 'sitemap',
    story_avatar: '/assets/IT for society circle.png',
    story_image: '/assets/stories/3/How does Google find my website.jpg',
    story_og_image:'/assets/stories/3/How does Google find my website.jpg',
    story_video_URL:'false',
    story_content: 'Google searches your website with Web Crawler, also known as spider or spiderbot. When the website is found, it is starting to crawl your page. Google renders the page and analyses both the text and non-text content and overall visual layout to decide where it should appear in Search results.'
  },{
    story_id: 2,
    story_custom: false,
    story_title: 'Child Protection Information Management System (CPIMS)',
    story_subtitle: 'Primero',
    story_tag: 'primero',
    story_avatar: '/assets/IT for society circle.png',
    story_image: '/assets/primero.PNG',
    story_og_image:'/assets/primero.PNG',
    story_video_URL:'false',
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
    story_tag: 'sdg',
    story_avatar: '/assets/SDG/SDG_Wheel_Transparent_WEB.png',
    story_image: '/assets/SDG/SDG_Poster_2019_goals_WEB_transparent.png',
    story_og_image:'/assets/SDG/SDG_Poster_2019_goals_WEB_transparent.png',
    story_video_URL:'false',
    story_content: 'Sustainable Development Goals (SDGs) are the blueprint to achieve a better and more sustainable future for all. After concluding Millenium Development Goals agenda in 2015, United Nations created new agenda to achieve 17 goals by 2030. The 17 goals have 169 targets and 247 indicators  '
  }];


  quotes: Story[] = [{
    story_id: 3,
    story_custom: false,
    story_title: 'Jimi Hendrix',
    story_subtitle: 'quote',
    story_tag: 'jimi',
    story_avatar: '/assets/IT for society circle.png',
    story_image: '/assets/quotes/jimi hendrix when the power of love.jpg',
    story_og_image:'/assets/quotes/jimi hendrix when the power of love.jpg',
    story_video_URL:'false',
    story_content: 'When the power of love overcomes the love of power, world will know peace'
  },{
    story_id: 2,
    story_custom: false,
    story_title: 'Jordan Peterson',
    story_subtitle: 'quote',
    story_tag: 'peterson',
    story_avatar: '/assets/IT for society circle.png',
    story_image: '/assets/quotes/Jordan Peterson order your household.jpg',
    story_og_image:'/assets/quotes/Jordan Peterson order your household.jpg',
    story_video_URL:'false',
    story_content: "Don't reorganize your state until you have ordered your own experience.Have some humility.If you cannot bring peace to your household,how dare you try to rule a city?"
  },{
    story_id: 1,
    story_custom: false,
    story_title: 'Peter Maurer',
    story_subtitle: 'quote',
    story_tag: '4.0',
    story_avatar: '/assets/IT for society circle.png',
    story_image: '/assets/quotes/peter maurer qoute forth industrial revolution.jpg',
    story_og_image:'/assets/quotes/peter maurer qoute forth industrial revolution.jpg',
    story_video_URL:'false',
    story_content: 'The Fourth Industrial Revolution has the potential to make inequalities visible and to make them less acceptable in the future'
  }]

  
  getStoriesByID(story_id: number): Story {
    return this.stories
      .filter(todo => todo.story_id === story_id)
      .pop();
  }

  getAllStories(): Story[] {
    return this.stories;
  }

  getAllQuotes(): Story[] {
    return this.quotes;
  }
  
  getQuoteByID(story_id: number): Story {
    return this.quotes
      .filter(todo => todo.story_id === story_id)
      .pop();
  }

}
