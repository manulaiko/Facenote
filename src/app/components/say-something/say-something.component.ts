import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Say something.
 * ==============
 *
 * Provides an input to write stories.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Component({
  selector: 'app-say-something',
  templateUrl: './say-something.component.html',
  styleUrls: ['./say-something.component.sass']
})
export class SaySomethingComponent {
  @Output() story: EventEmitter<string> = new EventEmitter<string>();
  private content = '';

  publish() {
    this.story.emit(this.content);
  }
}
