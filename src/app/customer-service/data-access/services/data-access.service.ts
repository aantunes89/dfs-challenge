import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendant } from '../../domain';
import { Observable } from 'rxjs';
import { Topic } from '../../domain/topic.interface';

@Injectable()
export class DataAccessService {
  private readonly _baseURL = 'http://localhost:3000';

  private appendableString = '';

  constructor(private readonly http: HttpClient) {}

  public getAttendants(): Observable<Attendant[]> {
    return this.http.get<Attendant[]>(`${this._baseURL}/attendants`);
  }

  public getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this._baseURL}/topics`);
  }

  public getNextTreeLevel(subject: string) {
    this.appendableString += `/${subject}`;
    return this.http.get<Topic[]>(`${this._baseURL}/topics` + this.appendableString);
  }

  public resetAppendableString() {
    this.appendableString = '';
  }
}
