export class Person {
  public id?: number;
  public lastname!: string;
  public firstname!: string;
  public minor?: boolean;
  public address1?: string;
  public address2?: string;
  public height?: number;
  public weight?: number;
  public birthdate!: Date;

  constructor(person: Person) {
    this.id = person.id;
    this.lastname = person.lastname;
    this.firstname = person.firstname;
    this.minor = person.minor;
    this.address1 = person.address1;
    this.address2 = person.address2;
    this.height = person.height;
    this.weight = person.weight;
    this.birthdate = person.birthdate;
  }
}
