import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  GetStudentData():Observable<any>{ 
    return this.http.get('https://www.jsonblob.com/api/a12e64bb-5e2e-11ea-a136-a7050c439c52');
  }

  GetWeatherData():Observable<any>{ 
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=313ad25c5b278d81ff85a3acd9966f63');
  }
}
