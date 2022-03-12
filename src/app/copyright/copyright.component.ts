import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<p class="copy">copyright: Rotem {{getCurrentYear()}}</p>`,
  styles: [`.copy{
    color: Grey;
    font-weight: bold;
  }`],
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentYear(): number {

    return new Date().getFullYear()
  }
}