import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '4995aa67756544e626615c87ee249827';

  constructor(private Http:HttpClient) { }

  getWeatherDatas(cityName:string):Observable<any>{
    return this.Http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
      );
  }
}
