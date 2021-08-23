import { Person } from './person';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private baseUrl = '/api/persons';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('fetched person list')),
        catchError(this.handleError<Person[]>('getPersons', []))
      );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put(this.baseUrl, person, this.httpOptions).pipe(
      tap(_ => this.log(`updated person id=${person.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  addPerson(person: Person): Observable<Person> {  
    return this.http.post<Person>(this.baseUrl, person, this.httpOptions).pipe(
      tap((newPerson: Person) => console.log(`added person w/ id=${newPerson.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  private log(message: string) {
    this.messageService.add(`PersoneService : ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    };
  }

}
