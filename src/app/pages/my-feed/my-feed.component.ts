import {Component} from '@angular/core';

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
export class MyFeedComponent {
  /**
   * Publishes a new story.
   *
   * @param text Story text.
   */
  public publishStory(text: string) {
    console.log(text);
  }
}
