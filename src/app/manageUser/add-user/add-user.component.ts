import {Component} from '@angular/core';
import {UserServiceService} from "../user/user-service.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private s: UserServiceService) {
  }

  u = new User();

  addUser(f: User) {
    this.s.addUser(f);
  }

}
