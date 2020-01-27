import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShortlyService {

  private post = 'https://rel.ink/api/links/';

  constructor (private http: HttpClient) { }


  postURL (URL: any) {
    return this.http.post<Response>(this.post, URL).pipe(
      map((response: Response) => {
        if (response) {
          return response
        }
      }, (error) => error)
    )
  }

  getURL (URL: any) {
    return this.http.get(`${this.post}/${URL}`).pipe(
      map((response) => {
        if (response) response
      }, (error) => error)
    )
  }
}
