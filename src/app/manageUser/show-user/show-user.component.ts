import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../user/user-service.service";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  users: any;
  i!: number;

  constructor(private s: UserServiceService) {
  }
  ngOnInit() {
    this.users = this.s.getUsers();
  }

  calculer(a: any, b: string, c: string) {
    this.i = this.s.fetchNbInList(a,b,c);
    //console.log(b);
   // console.log(c);
   // console.log(this.i);
    return this.i;
  }
}


