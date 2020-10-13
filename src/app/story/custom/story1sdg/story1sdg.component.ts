import { Component, OnInit } from '@angular/core';
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
  selector: 'app-story1sdg',
  templateUrl: './story1sdg.component.html',
  styleUrls: ['./story1sdg.component.css']
})
export class Story1sdgComponent implements OnInit {
  
  displayedColumns: string[] = ['code', 'title'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
