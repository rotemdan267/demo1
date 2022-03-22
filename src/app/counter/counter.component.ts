import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter: number = 0;

  needToDisable: boolean = true;

  ngOnInit(): void {
  }

  onCount(num: number): void {
    this.counter += num;
  }

  disableOnOff(): void{
    this.needToDisable = !this.needToDisable;
  }
}
