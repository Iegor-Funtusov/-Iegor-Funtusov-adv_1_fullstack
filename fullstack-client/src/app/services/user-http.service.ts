import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from '../pages/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private _api_url = environment.api_url + '/users';

  constructor(private _http: HttpClient) { }

  loadAllUsers(): Observable<UserModel[]> {
    return this._http.get(this._api_url, this._getOptions()).pipe(
      map((res: any) => {
        return res.data
      })
    );
  }

  loadUserById(id: number): Observable<UserModel> {
    return this._http.get(this._api_url + '/' + id, this._getOptions()).pipe(
      map((res: any) => {
        return res.data
      })
    );
  }

  deleteUserById(id: number): Observable<any> {
    return this._http.delete(this._api_url + '/' + id, this._getOptions()).pipe(
      map((res: any) => {
        return res.data
      })
    );
  }

  createUser(user: UserModel): Observable<any> {
    return this._http.post(this._api_url, user, this._getOptions()).pipe(
      map((res: any) => {
        return res.data
      })
    );
  }

  private _getOptions(): any {
    return {
      headers: new HttpHeaders({})
    };
  }
}
