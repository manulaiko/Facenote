import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {MessageService} from '../../services/message.service';
import {user} from '../../mock/user.mock';

/**
 * My Feed component.
 * ==================
 *
 * Component for the Mis historietas page.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.sass']
})
export class MyFeedComponent implements OnInit {
  private stories: Message[] = [];

  constructor(private service: MessageService) {
  }

  ngOnInit(): void {
    this.service.getAllMessages().subscribe(messages => {
      this.stories = messages;
    });
  }

  /**
   * Publishes a new story.
   *
   * @param text Story text.
   */
  public publishStory(text: string) {
    this.service.create(text, user);
  }
}
