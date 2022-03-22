import { Component, OnInit } from '@angular/core';
import type { User } from '../interfaces/User';

enum Contacts {
  Email = 'email',
  Phone = 'phone'
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  myContactsEnum = Contacts; // ה-enum
  // לא מוכר בקובץ html
  // כי הוא מחוץ לקלאס, לכן מכניסים אותו למשתנה
  // שיכיל אותו

  user: User = {
    name: "Rotem",
    email: "rotemdan@gmail.com",
    birthDate: Date.parse('1992-10-23'),
    contact: this.myContactsEnum.Phone
  }

  red: string = 'red';

  isItalic: boolean = true;

  calculatedStyle: any = {
    'font-weight': 'bold',
    'background-color': 'yellow'
  };

  haveMargin: boolean = true;

  myClasses: any = {};

  constructor() { 
    this.determineClasses();
  }

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

  determineClasses() {

    this.myClasses = {
      'largerFont': true,
      'reverseColor': true
    };
  }
}
