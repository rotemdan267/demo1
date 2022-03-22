import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.css']
})
export class StylingComponent implements OnInit {

  isSpecial: boolean = false;
  canSave: boolean = true;
  // עיצובים מיוחדים שאני "מחשב" אותם
  calculatedStyle = {};

  calculatedClasses = {};

  constructor() {
    this.setCalculatedStyles();
    this.setClasses();

  }

  setClasses() {
    this.calculatedClasses = {
      'specialPerson': this.isSpecial,
      'somethingCanSaved': this.canSave
    }
  }

  setCalculatedStyles(): void {
    this.calculatedStyle = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '50px' : '12px',
    };

  }

  ngOnInit(): void {
  }

}
