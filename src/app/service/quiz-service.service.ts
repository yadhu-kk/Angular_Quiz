import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizServiceService {
  constructor(private _http: HttpClient) {}

  getJson(): Observable<any> {
    return this._http.get('assets/questions.json');
  }
}
