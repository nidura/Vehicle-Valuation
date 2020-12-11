import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.css']
})
export class ValuationComponent {
    image1 = '';
    image2 = '';
    image3 = '';
    // contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

    constructor() { }

    createContact(){
      // console.log(this.contact);
      // this.dataService.createContact(this.contact);
      // this.contact = {id: null, name: "", description: "", email: ""};

    }

    onPrint(){
      window.print();
    }


    onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
     var reader = new FileReader();

     reader.readAsDataURL(event.target.files[0]); // read file as data url

     reader.onload = (event) => { // called once readAsDataURL is completed
       this.image1 = event.target.result;
     }
   }
 }
 onSelectFile2(event) {
   if (event.target.files && event.target.files[0]) {
  var reader = new FileReader();

  reader.readAsDataURL(event.target.files[0]); // read file as data url

  reader.onload = (event) => { // called once readAsDataURL is completed
    this.image2 = event.target.result;
  }
  }
}
onSelectFile3(event) {
  if (event.target.files && event.target.files[0]) {
 var reader = new FileReader();

 reader.readAsDataURL(event.target.files[0]); // read file as data url

 reader.onload = (event) => { // called once readAsDataURL is completed
   this.image3 = event.target.result;
 }
 }
}

}
