import {Injectable} from '@angular/core';
import {User} from "../../model/User";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  list: User[] =
    [
      {
        idCustomer: 1,
        firstName: "Mila",
        lastName: " Kunis",
        birthDate: "1999-06-30",
        accountCategory: "Admin",
        email: "mila@kunis.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 2,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 3,
        firstName: "George", lastName: "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 4,
        firstName: "Ryan",
        lastName: "Gossling",
        birthDate: "1999-06-30",
        accountCategory: "Golden",
        email: "Ryan@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 5,
        firstName: "Robert",
        lastName: "Downey",
        birthDate: "1999-06-30",
        accountCategory: "Blocked Account",
        email: "robert@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
        profession: "Software Engineer"
      }
    ]

  constructor() {
  }

  getUsers() {
    return this.list;
  }

  i!: number;

  fetchNbInList(list: any, attribute: string, attributeVal: string) {
  //  console.log('List:', list);
  //  console.log('Attribute:', attribute);
   // console.log('Attribute Value:', attributeVal);
    this.i = 0;
    for (let j = 0; j in list ; j++) {
      if (list[j][attribute] == attributeVal) {
        this.i++;
      }
    }
   // console.log('fetchnb i :',this.i);
    return this.i;
  }


}
