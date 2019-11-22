import {User} from '../models/user.model';

export const user: User = {
  id: 1,
  name: 'user',
  surname: '1',
  user: 'user1',
  birthDate: new Date().toString(),
  startDate: new Date().toString()
};

export const users: User[] = [
  user,
  {
    id: 2,
    name: 'user',
    surname: '2',
    user: 'user2',
    birthDate: new Date().toString(),
    startDate: new Date().toString()
  }
];
