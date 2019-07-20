import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

//Plugins
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: "page-page1",
  templateUrl: "page1.html"
})
export class Page1Page {
  urlImage: string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera: Camera) {}

  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.urlImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  GuardarImagen(){
    
  }
}
