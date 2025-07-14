import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client-dashboard/client-dashboard';

@Component({
  selector: 'app-client-card',
  imports: [CommonModule],
  templateUrl: './client-card.html',
  styleUrl: './client-card.scss'
})
export class ClientCard {
  @Input() client: any;
  @Output() like = new EventEmitter();
  @Output() viewProjects = new EventEmitter(); // new output event

  handleLike(event: MouseEvent) {
    event.stopPropagation();  // prevent card click
    this.like.emit(this.client);
  }

  handleCardClick() {
    this.viewProjects.emit(this.client);
  }
}
