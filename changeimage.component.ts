import { Component } from '@angular/core';

@Component({
  selector: 'app-changeimage',
  templateUrl: './changeimage.component.html',
  styleUrl: './changeimage.component.css'
})
export class ChangeimageComponent {



  imgPath1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9Qod2JH67jv7w0TUNqNA5OJVLkpi3mw6rw&s";
  imgName1: string = "Zeep";




  imagechange() {
    if (this.imgName1 == "Zeep") {
      this.imgPath1 = "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg";
      this.imgName1 = "flower";
    }
    else if (this.imgName1 == "flower") {

      this.imgPath1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9Qod2JH67jv7w0TUNqNA5OJVLkpi3mw6rw&s";
      this.imgName1 = "Zeep";
    }



  }



}
