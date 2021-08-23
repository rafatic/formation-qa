import { PersonService } from './../person.service';
import { Person } from './../person';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  personForm!: FormGroup;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.personForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      minor: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      height: new FormControl(0, [Validators.min(0)]),
      weight: new FormControl(0),
      birthdate: new FormControl(new Date())
    });
  }

  get firstname() { return this.personForm.get('firstname')!; }
  get lastname() { return this.personForm.get('lastname')!; }
  get height() { return this.personForm.get('height')!; }

  onSubmit() {
    const p: Person = new Person(<Person>this.personForm.value);
    this.personService.addPerson(p)
       .subscribe((): void => {
         console.log(`Saved person`);
     });
  }

}
