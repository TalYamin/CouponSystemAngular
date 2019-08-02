import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-acts',
  templateUrl: './com-acts.component.html',
  styleUrls: ['./com-acts.component.css']
})
export class ComActsComponent implements OnInit {

  pageTitle: string = "Company Actions"
  constructor() { }

  ngOnInit() {
  }

}
