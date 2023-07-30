import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  private readonly _baseURL = 'localhost:3000';

  constructor(private readonly http: HttpClient) {}

  getAttendants() {
    return this.http.get(`${this._baseURL}/attendants`);
  }
}
