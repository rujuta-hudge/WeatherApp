import { ServiceApiService } from './../service-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherdata: any;

  constructor(private FormBuilder: FormBuilder, private ServiceApiService: ServiceApiService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.FormBuilder.group({
      location: ['']
    });
  }
  sendvalues(formvalues: any) {
    this.ServiceApiService.getweather(formvalues.location).subscribe(data => this.weatherdata = data);
    console.log(this.weatherdata);
  }
}
