import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  darkModeChecked = true;
  darkThemeName = "my-pink-bluegrey";
  lightThemeName = "my-indigo-pink";

  ngOnInit(): void {
  }

/*   changeTheme(themeName) {
   var elemCSS =  document.getElementById('themeAsset');
   elemCSS.setAttribute ('href','../assets/css/' + themeName + '.css');
  } */

  darkMode(){
    var elemCSS =  document.getElementById('themeAsset');
    console.log(this.darkThemeName);
    if (this.darkModeChecked){
      localStorage.setItem("themeAsset", "dark");
      elemCSS.setAttribute ('href','../assets/css/' + this.darkThemeName + '.css');
    }
    else{
      elemCSS.setAttribute ('href','../assets/css/' + this.lightThemeName + '.css');
      localStorage.setItem("themeAsset", "light");
    }
    $("#themeAsset").trigger("change");
  }

}
