import { User } from './../_models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8089/SpringMVC/api/test/';
const API_URL1 = 'http://localhost:8089/SpringMVC/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getTrainerBoard(): Observable<any> {
    return this.http.get(API_URL + 'trainer', { responseType: 'text' });
  }

  getMembreBoard(): Observable<any> {
    return this.http.get(API_URL + 'member', { responseType: 'text' });
  }

  getEmployeeBoard(): Observable<any> {
    return this.http.get(API_URL + 'employee', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  retrieveAllUsers():Observable<any>{
    return this.http.get(API_URL1 + "retrieve-all-users")
  }

  public addUser(user:User):Observable<User>{
    return this.http.post<User>(API_URL1 + "add-user" , user)
  }

  public updateUser(user: User , id:any): Observable<User> {
    return this.http.put<User>(API_URL1 + "update-user/" + id , user);
  }

  public deleteUser(id: any): Observable<void> {
    return this.http.delete<void>(API_URL1 + "delete-user/" + id);
  }

  getUserById(id:any){
    return this.http.get<User>(API_URL1 + 'get-user-by-id/' + id);
  }

}