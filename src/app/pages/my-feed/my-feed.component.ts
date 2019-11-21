import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {User} from '../../models/user.model';

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

  ngOnInit(): void {
    const user = new User();
    user.user = 'testUser';
    user.name = 'User';

    const message = new Message();
    message.id = 0;
    message.publishDate = new Date().toDateString();
    message.content = 'Test';
    message.usersId = 0;
    message.user = user;

    this.stories.push(message);
  }

  /**
   * Publishes a new story.
   *
   * @param text Story text.
   */
  public publishStory(text: string) {
    console.log(text);
  }
}
