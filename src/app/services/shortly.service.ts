import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShortlyService {

  private post = 'https://news.ycombinator.com';

  constructor (private http: HttpClient) { }


  postURL (URL: any) {
    return this.http.post(this.post, URL).pipe(
      map((response) => {
        if (response) response
      }, (error) => error)
    )
  }

  getURL (URL: string) {
    return this.http.get(`${this.post}/${URL}`).pipe(
      map((response) => {
        if (response) response
      }, (error) => error)
    )
  }





}
