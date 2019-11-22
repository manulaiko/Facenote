import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';

/**
 * Contacts components.
 * ====================
 *
 * Renders a list of contacts.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent {
  @Input() contacts: User[];
}
