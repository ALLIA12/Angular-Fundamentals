import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'assets/persons.json'; // URL to the mock data

  constructor(private http: HttpClient) { }

  getPersonsData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
