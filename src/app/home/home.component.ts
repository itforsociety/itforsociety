import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private title: Title,private meta: Meta) {    
    this.title.setTitle("IT for Society");
    this.meta.updateTag({ content: "itforsociety.com" },'property="og:url"');
    this.meta.updateTag({ content: "assets/IT for society cover.png" },'property="og:image"');
    this.meta.updateTag({ content: "Use IT for positive impact on society" },'property="og:description"');
   }
  ITsImageURL = "../../assets/IT for society transparent inverted.png"

  ngOnInit(): void {

    if(localStorage.getItem("themeAsset") == "light"){
      $('.ITsImage').attr("src","../../assets/IT for society transparent.png")
    }
    else{
      $('.ITsImage').attr("src","../../assets/IT for society transparent inverted.png")
    }
    $('head').on('change', "#themeAsset", function() {
      if(localStorage.getItem("themeAsset") == "light"){
        $('.ITsImage').attr("src","../../assets/IT for society transparent.png")
      }
      else{
        $('.ITsImage').attr("src","../../assets/IT for society transparent inverted.png")
      }
    });
  }



   

}
