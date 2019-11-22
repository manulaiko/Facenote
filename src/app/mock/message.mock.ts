import {Message} from '../models/message.model';
import {user, users} from './user.mock';

export const messages: Message[] = [
  {
    id: 1,
    usersId: 1,
    content: 'Message 1 from user 1',
    publishDate: new Date().toString(),
    user
  },
  {
    id: 2,
    usersId: 1,
    content: 'Message 2 from user 1',
    publishDate: new Date().toString(),
    user
  },
  {
    id: 3,
    usersId: 1,
    content: 'Message 3 from user 1',
    publishDate: new Date().toString(),
    user
  },
  {
    id: 4,
    usersId: 2,
    content: 'Message 1 from user 2',
    publishDate: new Date().toString(),
    user: users[1]
  },
  {
    id: 5,
    usersId: 2,
    content: 'Message 2 from user 2',
    publishDate: new Date().toString(),
    user: users[1]
  },
];
