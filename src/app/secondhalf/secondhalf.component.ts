import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-secondhalf',
  templateUrl: './secondhalf.component.html',
  styleUrls: ['./secondhalf.component.css']
})
export class SecondhalfComponent implements OnInit {
  data: any = this.service.data;
  v = "ParaShar"
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.data = this.service.data;
  }

}
