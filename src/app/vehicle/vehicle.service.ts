import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  getVehicleList() {
    return this.http.get<any>('../assets/vehicleJson.json', {headers: this.headers, responseType: 'json'});
    // .map((res) => {
    //   debugger;
    //   console.log(res, "res");
    //   return res.vehicle });
  }

}