import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(themeName) {
   var elemCSS =  document.getElementById('themeAsset');
   elemCSS.setAttribute ('href','../assets/css/' + themeName + '.css');
  }

}
