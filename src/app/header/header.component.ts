import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  darkModeChecked = true;
  darkThemeName = "unicorn-app-theme.scss";
  lightThemeName = "my-indigo-pink";

  ngOnInit(): void {
    console.log("onInit")
    this.onChanges();
  }
  onChanges(): void{
    const header = document.getElementById("header") as HTMLElement;
    const footer = document.getElementById("footer") as HTMLElement;
    if(this.router.url == '/services' ){
      header.style.background = "#1B6488";
      footer.style.background = "#1B6488";
    }
    else{
        header.style.background = null;
        footer.style.background = null;
    }
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

