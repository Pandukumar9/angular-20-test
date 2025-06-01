import { CommonModule } from '@angular/common';
import { Component, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat {
  accountBalance = input<number>(0);
  supportAccessAllowed = output<boolean>();
  data = model<string>('');
  newMessage: string = '';

  messages = signal<{ id: number, sender: string, text: string }[]>([]);

  sendMessage(form: any) {
    if (this.newMessage?.trim()) {
      const current = this.messages();
      const newId = current.length > 0 ? current[current.length - 1].id + 1 : 1;

      const newEntry = {
        id: newId,
        sender: 'You',
        text: this.newMessage.trim()
      };

      this.messages.set([...current, newEntry]);
      this.data.set(this.newMessage.trim());
      this.newMessage = ''; // Clear input
    }
  }

  loadSampleMessages() {
    this.messages.set([
      { id: 1, sender: 'Alice', text: 'Hi there!' },
      { id: 2, sender: 'Bob', text: 'Hello!' },
      { id: 3, sender: 'Alice', text: 'How can I help you today?' },
      { id: 4, sender: 'Bob', text: 'I need assistance with my account.' },
      { id: 5, sender: 'Alice', text: 'Sure, let me check that for you.' },
      { id: 6, sender: 'Bob', text: 'Thank you!' },
      { id: 7, sender: 'Alice', text: 'Your account looks good to me.' },
      { id: 8, sender: 'Bob', text: 'Great!' },
      { id: 9, sender: 'Alice', text: 'Is there anything else?' },
      { id: 10, sender: 'Bob', text: 'Nope, all good.' },
      { id: 11, sender: 'Alice', text: 'Have a nice day!' },
      { id: 12, sender: 'Bob', text: 'You too!' },
      { id: 13, sender: 'Alice', text: 'Feel free to contact us anytime.' },
      { id: 14, sender: 'Bob', text: 'Will do. Thanks again!' },
      { id: 15, sender: 'Alice', text: 'Bye!' },
      { id: 16, sender: 'Bob', text: 'Bye!' },
      { id: 17, sender: 'Alice', text: 'Our support is 24/7.' },
      { id: 18, sender: 'Bob', text: 'Perfect to know.' },
      { id: 19, sender: 'Alice', text: 'Take care!' },
      { id: 20, sender: 'Bob', text: 'You too, bye!' }
    ]);
  }

  clearChat() {
    this.messages.set([]);
    this.data.set('');
    console.log('Chat cleared');
  }
}
