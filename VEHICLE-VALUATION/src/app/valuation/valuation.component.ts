import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.css']
})
export class ValuationComponent implements OnInit {



    // contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

    constructor() { }

    ngOnInit() {
    }

    createContact(){
      // console.log(this.contact);
      // this.dataService.createContact(this.contact);
      // this.contact = {id: null, name: "", description: "", email: ""};

    }

    onPrint(){
    window.print();
}
}
