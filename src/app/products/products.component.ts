import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  scrollEffect() {
    const [red, green, blue] = [0, 35, 106]
    //const [red2, green2, blue2] = [08, 213, 224]
    const scrollElement = document.getElementsByClassName("productCards")[0];
    const section1 = document.getElementById("elementsSVGFirst") as HTMLElement;
    const section2 = document.getElementById("elementsSVGSecond") as HTMLElement;
    const y = 1 - scrollElement.scrollTop / 850;
    const x = 0 + scrollElement.scrollTop / 850;
    section1.style.opacity = y.toString();
    section2.style.opacity = x.toString();
    console.log("<br>Vertically: " + y);
  }
  ngOnInit(): void {
  }

}
