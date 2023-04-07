import { Membership } from './../_models/Membership';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8089/SpringMVC/membership/';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }

  retrieveAllMemberships():Observable<any>{
    return this.http.get(API_URL + "retrieve-all-memberships")
  }

  public addMembership(membership:Membership):Observable<Membership>{
    return this.http.post<Membership>(API_URL + "add-membership" , membership)
  }

  public updateMembership(membership: Membership , id:any): Observable<Membership> {
    return this.http.put<Membership>(API_URL + "update-membership/" + id , membership);
  }

  public deleteMembership(id: any): Observable<void> {
    return this.http.delete<void>(API_URL + "delete-membership/" + id);
  }

  getProductById(id:any){
    return this.http.get<Membership>(API_URL + 'get-membership-by-id/' + id);
  }
}
