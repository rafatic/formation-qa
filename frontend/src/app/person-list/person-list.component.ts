import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList: Array<Person>;
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'minor', 'address1', 'address2', 'height', 'weight', 'birthdate'];

  constructor(
    private personService: PersonService
  ) 
  {
    this.personList = new Array<Person>();
  }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(result => {
      this.personList=result;
    });
  }

  selectPerson(selectedPerson: Person): void {
    console.log(`selected person n°${selectedPerson.id}`);
  }
}
