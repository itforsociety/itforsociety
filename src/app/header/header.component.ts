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
  darkThemeName = "unicorn-app-theme.scss";
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
      //elemCSS.setAttribute ('href','../assets/css/' + this.darkThemeName);
      document.body.classList.remove("its-light-theme");
    }
    else{
      //elemCSS.setAttribute ('href','../assets/css/' + this.lightThemeName + '.css');
      document.body.classList.add("its-light-theme");
      localStorage.setItem("themeAsset", "light");
    }
    $("#themeAsset").trigger("change");
  }

}
