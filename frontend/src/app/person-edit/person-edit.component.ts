import { PersonService } from './../person.service';
import { Person } from './../person';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  personForm!: FormGroup;
  editMode: Boolean = false;
  personId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

    this.personId = this.route.snapshot.params.id;
    if(this.personId) {
      this.editMode = true;
      this.personService.getPerson(this.personId).subscribe(p => {
        console.log(p);
        this.fillform(p);
      });
    }

  }

  get firstname() { return this.personForm.get('firstname')!; }
  get lastname() { return this.personForm.get('lastname')!; }
  get height() { return this.personForm.get('height')!; }

  onSubmit() {

    const p: Person = new Person(<Person>this.personForm.value);
    if(this.editMode) {
      p.id = this.personId;
      this.personService.updatePerson(p).subscribe((): void => {
        console.log(`Updated person`);
        console.log(p);
        this.router.navigate(['person-list/']);
      });
    } else {
      this.personService.addPerson(p)
       .subscribe((): void => {
         console.log(`Saved person`);
         console.log(p);
         this.router.navigate(['person-list/']);
     });
    }

  }

  fillform(person: Person): void {
    this.personForm.patchValue({
      firstname: person.firstname,
      lastname: person.lastname,
      minor: person.minor,
      address1: person.address1,
      address2: person.address2,
      height: person.height,
      weight: person.weight,
      birthdate: person.birthdate
    })
  }

}
