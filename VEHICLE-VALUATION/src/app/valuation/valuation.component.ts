import {Component, OnInit} from '@angular/core';
// import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.css']
})
export class ValuationComponent {
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  barcodeValue: any;
  regNo: any;

  reportNo: any;

  // contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor() {
  }

  ngOnInit(): void {
  }

  createContact() {
    // console.log(this.contact);
    // this.dataService.createContact(this.contact);
    // this.contact = {id: null, name: "", description: "", email: ""};

  }

  onPrint() {
    window.print();
  }

  // tslint:disable-next-line:typedef
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.image1 = event.target.result;
      };
    }
  }

  // tslint:disable-next-line:typedef
  onSelectFile2(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.image2 = event.target.result;
      };
    }
  }

  // tslint:disable-next-line:typedef
  onSelectFile3(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.image3 = event.target.result;
      };
    }
  }

  // tslint:disable-next-line:typedef
  onSelectFile4(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.image4 = event.target.result;
      };
    }
  }

}
