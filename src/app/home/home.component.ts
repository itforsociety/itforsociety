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
    if(localStorage.getItem("themeAsset") == "light"){
      console.log(localStorage.getItem("themeAsset"), "header")
      $('.ITsImage').attr("src","../../assets/IT for society transparent.png")
    }
    else{
      $('.ITsImage').attr("src","../../assets/IT for society transparent inverted.png")
    }
    $('head').on('change', "#themeAsset", function() {
      console.log(localStorage.getItem("themeAsset"), "jquery")
      if(localStorage.getItem("themeAsset") == "light"){
        $('.ITsImage').attr("src","../../assets/IT for society transparent.png")
      }
      else{
        $('.ITsImage').attr("src","../../assets/IT for society transparent inverted.png")
      }
    });
  }

   

}
