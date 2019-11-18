import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

/**
 * User hero component.
 * ====================
 *
 * Represents the hero with the user profile.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
@Component({
  selector: 'app-user-hero',
  templateUrl: './user-hero.component.html',
  styleUrls: ['./user-hero.component.sass']
})
export class UserHeroComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
