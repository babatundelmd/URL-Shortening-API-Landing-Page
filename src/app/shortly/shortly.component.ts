import { Component, OnInit } from '@angular/core';
import { ShortlyService } from '../services/shortly.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { parse } from 'querystring';


@Component({
  selector: 'app-shortly',
  templateUrl: './shortly.component.html',
  styleUrls: [ './shortly.component.css' ]
})
export class ShortlyComponent implements OnInit {
  formData: FormGroup;
  URLDetails: [] = [];

  constructor (private service: ShortlyService,
    private builder: FormBuilder) { }

  ngOnInit () {
    this.resetForm();
    this.shorten(this.formData)

  }
  resetForm () {
    this.formData = this.builder.group({
      url: new FormControl('', [ Validators.required ])
    })

  }

  shorten (formData) {
    console.log(this.formData)
    this.service.postURL(formData).subscribe(res => {
      localStorage.setItem('URLDetails', JSON.stringify(res))
      console.log(res)
    }, error => console.error(error))
  }

}
