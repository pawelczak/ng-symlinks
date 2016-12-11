// 3d party imports
import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
import { Message } from './models/message';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [
        MessageService
    ]
})
export class HomeComponent {

    public text: string;

    constructor(private messageService: MessageService) {
        this.text = this.messageService.send(<Message>{text: 'test'});
    }

}
