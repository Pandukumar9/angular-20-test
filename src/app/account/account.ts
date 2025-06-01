import { Component, inputBinding, outputBinding, signal, twoWayBinding, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { Chat } from '../chat/chat';
import { ChatFocus } from '../chat-focus';
import { ChatNotify } from '../chat-notify';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class Account {
 @ViewChild('chatOutlet', { read: ViewContainerRef, static: true })
  chatContainer!: ViewContainerRef;

  balance = signal(100);
  data = signal('');
  session = signal(true);

  openChat() {
    this.chatContainer.clear();
    this.chatContainer.createComponent(Chat, {
      bindings: [
        inputBinding('accountBalance', this.balance),
        outputBinding('supportAccessAllowed', (access: boolean) => {
          console.log('Support access allowed:', access);
        }),
        twoWayBinding('data', this.data),
      ],
      directives: [
        ChatFocus,
        {
          type: ChatNotify,
          bindings: [
            inputBinding('sound', () => true),
            outputBinding<number>('status', (status) =>
              console.log('Notification:', status)
            ),
            twoWayBinding('session', this.session),
          ],
        },
      ],
    });
  }
}
