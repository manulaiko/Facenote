import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {user} from '../../mock/user.mock';

/**
 * My Contacts component.
 * ======================
 *
 * Component for the Mis colegas page.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.sass']
})
export class MyContactsComponent implements OnInit {
  contacts: User[];

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getRelationships(user).subscribe(users => {
      this.contacts = users;
    });
  }
}
