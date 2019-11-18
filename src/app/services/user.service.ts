import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

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
    return this.http.get<User>('http://localhost:8080/users/1');
  }
}
