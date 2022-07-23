import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() {
    
   }
   Ellipse_2: HTMLElement = document.getElementById("Ellipse_2");
   scrollValue = 0;
   matrixValue = -109.54;

  scrollEffect() {
    const [red, green, blue] = [0, 35, 106]
    const [m1, m2, m3, m4, m5, m6] = [(0.208 + (this.scrollValue/2)), (-0.978 + (this.scrollValue/2)) ,(0.978+ (this.scrollValue/2)) ,(0.708 + (this.scrollValue/2)) , (159.041 + (this.scrollValue/2)) ,  1056.417 ]
    //const [red2, green2, blue2] = [08, 213, 224]
    const scrollElement = document.getElementsByClassName("productCards")[0];
    const section1 = document.getElementById("elementsSVGFirst") as HTMLElement;
    const section2 = document.getElementById("elementsSVGSecond") as HTMLElement;
    const Rectangle_1 = document.getElementById("Rectangle_1") as HTMLElement;
    const Rectangle_2 = document.getElementById("Rectangle_2") as HTMLElement;
    const Polygon_1 = document.getElementById("Polygon_1") as HTMLElement;
    const Polygon_2 = document.getElementById("Polygon_2") as HTMLElement;
    const Ellipse_1 = document.getElementById("Ellipse_1") as HTMLElement;
    const Ellipse_2 = document.getElementById("Ellipse_2") as HTMLElement;
    //var myVideo = document.getElementById("productCardLogoVideo") as HTMLVideoElement;
    Ellipse_2.classList.remove("animateCircle");
    //myVideo.classList.remove("productCardLogoVideoShow");
    //myVideo.pause();
    console.log(this.Ellipse_2,"translate( " + (1288 + this.scrollValue/2) + ", " + (176+this.scrollValue/2) +")" + "<br>Vertically: " + scrollElement.scrollTop.toString() + "scrollValue" + this.scrollValue + "matrix(" + (0.208 + (this.scrollValue/2)) +", " + (-0.978 + (this.scrollValue/2)) + "," + (0.978+ (this.scrollValue/2)) + "," + (0.708 + (this.scrollValue/2)) + "," + (159.041 + (this.scrollValue/2)) + "," + 1056.417 +")");
    this.matrixValue = -109.54 + this.scrollValue/10;
    this.scrollValue = scrollElement.scrollTop;
    var y = 1 - this.scrollValue/ 850;
    var x = 0 + this.scrollValue / 850;
    if (scrollElement.scrollTop < 1742){
      section1.style.opacity = y.toString();
      section2.style.opacity = x.toString();
      Rectangle_1.style.transform = "matrix(0.995, 0.105, -0.105, 0.995, -131.031, " + this.matrixValue.toString() + ")";
      Rectangle_2.style.transform = "matrix(0.995, 0.105, -0.105, 0.995, -131.031, " + this.matrixValue.toString() + ")";
      Polygon_1.style.transform = "matrix(" + (0.208 + (this.scrollValue/9000)) +", " 
                                            + (-0.978 + (this.scrollValue/9000)) + "," 
                                            + (0.978+ (this.scrollValue/9000)) + ","
                                            + (0.208 + (this.scrollValue/9000)) + "," 
                                            + (159.041 + (this.scrollValue/900)) + "," 
                                            + (1056.417+ (this.scrollValue/900)) +
                                          ")";
      Polygon_2.style.transform = "matrix(" + (0.208 + (this.scrollValue/9000)) +", " 
                                            + (-0.978 + (this.scrollValue/9000)) + "," 
                                            + (0.978+ (this.scrollValue/9000)) + ","
                                            + (0.208 + (this.scrollValue/9000)) + "," 
                                            + (159.041 + (this.scrollValue/900)) + "," 
                                            + (1056.417+ (this.scrollValue/900)) +
                                          ")";
      Ellipse_1.style.transform = "translate( " + (1288 - this.scrollValue/7) + "px, " + (176 - this.scrollValue/3) +"px)";
      Ellipse_2.style.transform = "translate( " + (1288 - this.scrollValue/7) + "px, " + (176 - this.scrollValue/3) +"px)";
    }
    
  }

  animateCircle(){
    const Ellipse_2 = document.getElementById("Ellipse_2") as HTMLElement;
    var myVideo = document.getElementById("productCardLogoVideo") as HTMLVideoElement;
    var isproductCardLogoVideoShow = document.getElementsByClassName('productCardLogoVideoShow');
    if (isproductCardLogoVideoShow.length > 0) {
      myVideo.classList.remove("productCardLogoVideoShow");
      Ellipse_2.classList.remove("animateCircle");
      myVideo.pause();
    }else{
      Ellipse_2.classList.add("animateCircle");
      myVideo.classList.add("productCardLogoVideoShow");
      myVideo.play();
    }

    
    }
    jumpToScroll(el){
      const scrollToElement = document.getElementById(el) as HTMLElement;
      scrollToElement.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          }
      );
    }
    ngOnInit(): void {
      const header = document.getElementById("header") as HTMLElement;
      const footer = document.getElementById("footer") as HTMLElement;
      const products = document.getElementById("products") as HTMLElement;
        header.style.background = "#1B6488";
        footer.style.background = "#1B6488";      
    }

}

