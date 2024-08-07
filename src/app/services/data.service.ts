import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrlLeadership = 'assets/data/leadership.json';

  constructor(private http: HttpClient) { }

  getLeadershipData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrlLeadership).pipe(
      catchError(this.handleError<any[]>('getLeadershipData', []))
    );
  }



private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`); 
    return of(result as T);
  };
}
}
