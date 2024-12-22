import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  /**getUsers() {
    return fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => data);
  }**/

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUser(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
