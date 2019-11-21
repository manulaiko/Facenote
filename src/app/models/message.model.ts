/**
 * Message model.
 * ==============
 *
 * Represents an message from the backend.
 *
 * @author Manulaiko <manulaiko@gmail.com>
 */
export class Message {
  id: number;
  usersId: number;
  content: string;
  publishDate: string;
}
