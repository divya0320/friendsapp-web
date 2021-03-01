import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { FriendModel } from '../models/friend.model';
import { throwError } from 'rxjs';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class FriendDetailsService {

  constructor(private http:HttpClient) { }

  public getUserDetails=():Observable<FriendModel>=>{

      return this.http.get('server/api/v1/userList/')
      .map(response => response as FriendModel)
      .pipe(catchError(err =>
        {
            console.log();
            return throwError(err);
  
        }));

  }

  public getUserFriendDetails(id: number) {
    return this.http.get('server/api/v1/usersFriendList/'+id)
    .map(response => response as FriendModel)
    .pipe(catchError(err =>
      {
          console.log();
          return throwError(err);

      }));
  }

  getUserSuggestedFriendDetails(id: number) {
    return this.http.get('server/api/v1/usersSuggestedFriendList/'+id)
    .map(response => response as FriendModel)
    .pipe(catchError(err =>
      {
          console.log();
          return throwError(err);

      }));
  }

  getSuggestedFriendListGenographicallyQuery(id: number) {
    return this.http.get('server/api/v1/usersSuggestedFriendListGeographically/'+id)
    .map(response => response as FriendModel)
    .pipe(catchError(err =>
      {
          console.log();
          return throwError(err);

      }));
  }
}
