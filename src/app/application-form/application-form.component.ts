import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  obj: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getFormValues(formValues: any): void {
    console.log(formValues);
    this.obj = formValues;
  }
}
