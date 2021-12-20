import { PersonService } from './../person.service';
import { Person } from './../person';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../state.service';


@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  personForm!: FormGroup;
  editMode: Boolean = false;
  personId?: number;
  version: number | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private stateService: StateService
  ) { }

  get firstname() { return this.personForm.get('firstname')!; }
  get lastname() { return this.personForm.get('lastname')!; }
  get height() { return this.personForm.get('height')!; }
  get weight() { return this.personForm.get('weight')!; }
  get birthdate() { return this.personForm.get('birthdate')!; }

  ngOnInit(): void {

    this.stateService.version.subscribe(newVersion => {
      this.version = newVersion;

      if(this.version === 1) {
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
      } else if(this.version === 2) {
        this.personForm = new FormGroup({
          firstname: new FormControl('', [Validators.required]),
          lastname: new FormControl('', [Validators.required]),
          minor: new FormControl(''),
          address1: new FormControl(''),
          address2: new FormControl(''),
          height: new FormControl(0, [Validators.min(0), this.integerValidator()]),
          weight: new FormControl(0, [Validators.min(0), this.integerValidator()]),
          birthdate: new FormControl(new Date())
        });
      }

      this.personId = this.route.snapshot.params.id;
      if(this.personId) {
        this.editMode = true;
        this.personService.getPerson(this.personId).subscribe(p => {
          this.fillform(p);
        });
      }
    });
  }

  onSubmit() {

    const p: Person = new Person(<Person>this.personForm.value);
    if(this.editMode) {
      p.id = this.personId;
      this.personService.updatePerson(p).subscribe((): void => {
        this.router.navigate(['person-list/']);
      });
    } else {
      this.personService.addPerson(p)
       .subscribe((): void => {
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

  integerValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      return typeof control.value !== "number" ? {invalidType: {value: control.value}} : null;
    };
  }
}
