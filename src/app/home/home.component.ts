import { Component, OnInit } from '@angular/core';
import { mixinColor } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [
    {
      imageID: 1,
      imageURL: "../../assets/slideshow/large/1.jpg",
      imageThumbURL: "../../assets/slideshow/thumbs/1.jpg"
    },
    {
      imageID: 2,
      imageURL: "../../assets/slideshow/large/2.jpg",
      imageThumbURL: "../../assets/slideshow/thumbs/2.jpg"
    },
    {
      imageID: 3,
      imageURL: "../../assets/slideshow/large/3.jpg",
      imageThumbURL: "../../assets/slideshow/thumbs/3.jpg"
    },
    {
      imageID: 45,
      imageURL: "../../assets/slideshow/large/4.jpg",
      imageThumbURL: "../../assets/slideshow/thumbs/4.jpg"
    }
  ]
  firstImage = this.images[0];
  lastImage = this.images[this.images.length - 1];
  selectedImage = this.firstImage;
  nextImage = this.images[1];
  previousImage = this.lastImage;

  ngOnInit(): void {
   //$("#header").css("background-color", "blue");
  }

  

  nextSlide(imageID){
    let index = this.images.findIndex(function(item, i){
      return item.imageID === imageID
    });
    //if it's last image get the first one.
    if (index + 1 == this.images.length){
      this.selectedImage = this.firstImage;
    }
    else{
      this.selectedImage = this.images[index + 1];
    }

    
    if (index == this.images.length - 1){
      this.nextImage = this.images[1];
      this.previousImage = this.lastImage;
    }
    else if (index == this.images.length - 2){
      this.nextImage = this.firstImage;
      this.previousImage = this.images[this.images.length - 2];
    }
    else{
      this.nextImage = this.images[index + 2];
      this.previousImage = this.images[index]
    }
  }

  previousSlide(imageID){
    let index = this.images.findIndex(function(item, i){
      return item.imageID === imageID
    });
    //if it's first image get the last one.
    if (index == 0){
      this.selectedImage = this.lastImage;
    }
    else{
      this.selectedImage = this.images[index - 1];
    }

    if (index == 0){
      this.previousImage = this.images[this.images.length - 2];
      this.nextImage = this.firstImage;
    }
    else if (index == 1){
      this.previousImage = this.lastImage;
      this.nextImage = this.images[1];
    }
    else{
      this.previousImage = this.images[index-2];
      this.nextImage = this.images[index];
    }
  }

  

}
