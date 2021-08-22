import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedVersion : string = "V 1.0";

  constructor() { }

  ngOnInit(): void {
  }

  changeVersion(version: String) {
    console.log('changed version to : ', version);
  }

}
