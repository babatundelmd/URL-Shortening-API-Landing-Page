import { Component, OnInit } from '@angular/core';
import { ShortlyService } from '../services/shortly.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';


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
    const getLocal = JSON.parse(localStorage.getItem('URLDetails'));
    console.log(getLocal)
    this.resetForm();

  }
  resetForm () {
    this.formData = this.builder.group({
      url: new FormControl('', [ Validators.required ])
    })

  }

  shorten (formData) {
    console.log(this.formData.value)
    this.service.postURL(this.formData.value).subscribe(res => {
      localStorage.setItem('URLDetails', JSON.stringify(res));
      this.resetForm();
      console.log({ res })
    }, error => console.error(error))
  }

}
