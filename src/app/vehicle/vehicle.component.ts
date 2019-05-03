import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Vehicle } from '../vehicle';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  vehicleList: any;
  ngOnInit() {
    this.vehicleService.getVehicleList().subscribe(
      (successData) => {
        debugger;
        console.log(successData)
        this.vehicleList = successData;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}