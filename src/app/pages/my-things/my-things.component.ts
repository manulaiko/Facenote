import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {MessageService} from '../../services/message.service';
import {user} from '../../mock/user.mock';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

/**
 * My Things component.
 * ====================
 *
 * Component for the Mis Cosas page.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Component({
  selector: 'app-my-things',
  templateUrl: './my-things.component.html',
  styleUrls: ['./my-things.component.sass']
})
export class MyThingsComponent implements OnInit {
  stories: Message[];
  contacts: User[];

  constructor(private messageService: MessageService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.messageService.getUserMessages(user).subscribe(messages => {
      this.stories = messages;
    });
    this.userService.getRelationships(user).subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}
