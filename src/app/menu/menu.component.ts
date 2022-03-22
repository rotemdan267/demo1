import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links:any[] = [];

  constructor() {
    this.links = [
      { title: 'Yahoo', link: "https://www.yahoo.com/", target: "_blank"},
      { title: 'Google', link: "https://www.google.com/", target: "_blank"},
      { title: 'Ynet', link: "https://www.ynet.co.il/", target: "_blank"},
      { title: 'Walla', link: "https://www.walla.co.il/", target: "_blank"}
    ]
   }

  ngOnInit(): void {
  }
}
