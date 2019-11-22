import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {user, users} from '../mock/user.mock';

/**
 * User service.
 * =============
 *
 * Service for the `/users` api endpoint.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  /**
   * Returns the main user.
   *
   * @return Logged in user.
   */
  getUser(): Observable<User> {
    return of<User>(user);
    // return this.http.get('http://localhost:8080/user/1');
  }

  /**
   * Returns all users.
   *
   * @return All users in backend.
   */
  getAllUsers(): Observable<User[]> {
    return of<User[]>(users);
  }

  /**
   * Returns the contacts of the given user.
   *
   * @param user User to get the contacts.
   *
   * @return Contacts of `user`.
   */
  getRelationships(user: User): Observable<User[]> {
    return of<User[]>(users.filter(u => {
      return u.id !== user.id;
    }));
  }
}
