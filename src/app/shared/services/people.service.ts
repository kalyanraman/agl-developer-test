import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getPeople(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(environment.peopleUrl);
  }
}
