import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendant } from '../../domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  private readonly _baseURL = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  getAttendants(): Observable<Attendant[]> {
    return this.http.get<Attendant[]>(`${this._baseURL}/attendants`);
  }
}
