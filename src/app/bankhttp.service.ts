import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankhttpService {
  public a1 = [];
  private baseUrl = "https://vast-shore-74260.herokuapp.com/banks";
  public myCity = "MUMBAI"
  public responseCache = new Map();

  constructor(private _http: HttpClient) {
    console.log('Bank http service called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle http error');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getBankBranches(): Observable<any> {

    /*let myResponse = this._http.get(this.baseUrl + '?city=' + this.myCity);
    console.log(myResponse);
    return myResponse;*/

    const banksFromCache = this.responseCache.get(this.baseUrl + '?city=' + this.myCity);
    if (banksFromCache) {
      return of(banksFromCache);
    }
    const response = this._http.get<any>(this.baseUrl + '?city=' + this.myCity);
    response.subscribe(banks => this.responseCache.set(this.baseUrl + '?city=' + this.myCity, banks));
    return response;
  }





  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('fav'));
  }

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('fav', JSON.stringify(data))
  }

  public addArray = (element): any => {
    this.a1.push(element)
    console.log(this.a1)
    return this.a1;
  }

}
