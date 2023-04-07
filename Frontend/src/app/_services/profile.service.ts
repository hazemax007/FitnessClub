import { Form, NgForm } from '@angular/forms';
import { User } from './../_models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8089/SpringMVC/user/';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  }
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserById(id:any){
    return this.http.get<User>(API_URL + 'get-user-by-id/' + id);
  }

  updateUser (id: any, user: FormData){
    return this.http.put<User>(API_URL + 'update-user/' + id, user);
    }
}
