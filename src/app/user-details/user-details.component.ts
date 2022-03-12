import { Component, OnInit } from '@angular/core';
import type { User } from '../interfaces/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = {
    name: "Rotem",
    email: "rotemdan@gmail.com",
    birthDate: Date.parse('1992-10-23')
  }

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(dateOfBirth: number): number {

    if (dateOfBirth != undefined) {
      let dob = new Date(dateOfBirth);
      let diff_ms = Date.now() - dob.getTime();
      let age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    else return 0;

  }
}
