import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllstudentService {

  constructor(private httpClient:HttpClient) { }

  getallstudent():Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students")
  }
}
