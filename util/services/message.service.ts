import { Injectable } from '@angular/core';

import { Message } from '../models/message';

@Injectable()
export class MessageService {


	send(message: Message) {
		return 'It works!';
	}
}