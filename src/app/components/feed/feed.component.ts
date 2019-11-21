import {Component, Input} from '@angular/core';
import {Message} from '../../models/message.model';

/**
 * Feed component.
 * ===============
 *
 * Shows a list of stories.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent {
  @Input() stories: Message[];
}
