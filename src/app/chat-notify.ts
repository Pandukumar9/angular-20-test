import { Directive, input, model, output } from '@angular/core';

@Directive({
  selector: '[appChatNotify]'
})
export class ChatNotify {

  sound = input<boolean>(false);
  status = output<number>();
  session = model<boolean>(true);

  constructor() {
    // Notification logic can go here
  }
}
