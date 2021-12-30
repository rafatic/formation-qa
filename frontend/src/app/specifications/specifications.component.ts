import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css']
})
export class SpecificationsComponent implements OnInit {

  version: number | undefined;
  constructor(
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.stateService.version.subscribe(newVersion => {
      this.version = newVersion;
    });
  }

}
