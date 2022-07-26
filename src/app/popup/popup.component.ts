import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() {}

  cookiesOK = localStorage.getItem("cookiesOK");


  disableCookies(){
    localStorage.setItem("cookiesOK","Remove Cookies"); 
    window['ga-disable-GA_MEASUREMENT_ID'] = true;   
    const cookies = document.getElementById("cookies") as HTMLElement;
    cookies.style.display = "none";
  }
  removePopup(){
    localStorage.setItem("cookiesOK","OK");
    window['ga-disable-GA_MEASUREMENT_ID'] = false;     
    const cookies = document.getElementById("cookies") as HTMLElement;
    cookies.style.display = "none";
  }

  


  ngOnInit(): void {
    const cookies = document.getElementById("cookies") as HTMLElement;
    if(this.cookiesOK == "OK"){
      cookies.style.display = "none";
    }
  }

}
