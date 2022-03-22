import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-or-cat',
  templateUrl: './dog-or-cat.component.html',
  styleUrls: ['./dog-or-cat.component.css']
})
export class DogOrCatComponent implements OnInit {

  constructor() { }

  isCat:boolean = true;

  ngOnInit(): void {
  }
  
  toggleDogCat(): void {
    this.isCat = !this.isCat;
  }

}
