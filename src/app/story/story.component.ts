import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../models/story.model';
import { StoriesService } from '../services/stories.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title} from '@angular/platform-browser';
export interface SDGs {
  code: string;
  title: string;
}
const ELEMENT_DATA: SDGs []  = [
  {
    code:"6.1",
    title: "By 2030, achieve universal and equitable access to safe and affordable drinking water for all"
  },
  {
    code:"6.2",
    title: "By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations"
  },
  {
    code:"6.3",
    title: "By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally"
  },
  {
    code:"6.4",
    title: "By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity"
  },
  {
    code:"6.5",
    title: "By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate"
  },
  {
    code:"6.6",
    title: "By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes"
  },
  {
    code:"6.a",
    title: "By 2030, expand international cooperation and capacity-building support to developing countries in water and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies"
  },
  {
    code:"6.b",
    title: "Support and strengthen the participation of local communities in improving water and sanitation management"
  }
]

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: Story = new Story();

  displayedColumns: string[] = ['code', 'title'];
  dataSource = ELEMENT_DATA;
  

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.story = new Story (
        this.storiesService.getStoriesByID(Number(params.get('story_id')))        
      );
      this.title.setTitle(this.story.story_title + " | ITforSociety");
      this.meta.updateTag({ name: this.story.story_title, content: this.story.story_subtitle });
      this.meta.updateTag({ content: "itforsociety.com/story/" + this.story.story_id + "/" + this.story.story_title },'property="og:url"');
      this.meta.updateTag({ content: this.story.story_og_image },'property="og:image"');
      this.meta.updateTag({ content: this.story.story_title },'property="og:description"');
    });
  }
}
