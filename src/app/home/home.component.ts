import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }
  ITsImageURL = "../../assets/IT for society transparent inverted.png"

  ngOnInit(): void {
    console.log(document.getElementById('discoverThemeChange'), "tu sam" + $('#head'))
    $('head').on('change', "#themeAsset", function() {
      if(localStorage.getItem("themeAsset") == "light"){
        $('.ITsImage').attr("src","../../assets/IT for society transparent.png")
      }
      else{
        $('.ITsImage').attr("src","../../assets/IT for society transparent inverted.png")
      }
      console.log(this.ITsImageURL, "hey hey");
    });
  }

  onThemeChange(){
    this.ITsImageURL = "../../assets/IT for society transparent.png";
    console.log(this.ITsImageURL, "hey hey");
  }

  

  

}
