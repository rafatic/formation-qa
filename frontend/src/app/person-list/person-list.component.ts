import { Component, OnInit } from '@angular/core';
import { PersonService } from './../person.service';
import { Person } from './../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList: Person[] = [];
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'minor', 'address1', 'address2', 'height', 'weight', 'birthdate'];

  constructor(private personService: PersonService) { }



  ngOnInit(): void {
    this.getPersons();
  }


  getPersons(): void {
    this.personService.getPersons().subscribe(persons => {
      this.personList = persons;
      console.log(this.personList);
    });
  }

  selectRow(person: Person): void {
    console.log(person);
  }

}
