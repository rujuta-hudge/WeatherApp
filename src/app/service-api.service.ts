import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { }

  getweather(location: string) {
    //return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=&APPID=2106f13e2764bdf5946a3330bc3b5c19" + location);
    return this.http.get("http://api.weatherstack.com/current?access_key=aa163a969abe8212004f09b70894027c&query=" + location);
  }
}
