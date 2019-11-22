import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../models/message.model';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';
import {messages} from '../mock/message.mock';

/**
 * Message service.
 * ================
 *
 * Service for the `/messages` api endpoint.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) {
  }

  /**
   * Creates a new message.
   *
   * @param content Message content.
   * @param author  Message author.
   *
   * @return Created message.
   */
  public create(content: string, author: User): Observable<Message> {
    const message = new Message();
    message.usersId = author.id;
    message.content = content;

    messages.push(message);

    return of<Message>(message);
    // return this.http.post<Message>('http://localhost:8080/messages', message);
  }

  /**
   * Returns all messages.
   *
   * @return All messages from backend.
   */
  public getAllMessages(): Observable<Message[]> {
    return of<Message[]>(messages);
  }
}
