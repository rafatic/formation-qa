import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedVersionString : string = 'V 1.0';
  
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

  changeVersion(version: number) {
    console.log('changed version to : ', version);
    version === 1 ? this.selectedVersionString = 'V 1.0' : this.selectedVersionString = 'V 2.0';
    this.stateService.changeVersion(version);
  }

}
