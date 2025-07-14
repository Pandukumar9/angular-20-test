import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientCard } from '../client-card/client-card';
import { Router, RouterOutlet } from '@angular/router';

export interface Client {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  liked: boolean;
}

@Component({
  selector: 'app-client-dashboard',
  imports: [CommonModule,FormsModule,ClientCard,RouterOutlet],
  templateUrl: './client-dashboard.html',
  styleUrl: './client-dashboard.scss'
})
export class ClientDashboard {
 clients: Client[] = [];
  name = '';
  email = '';

  addClient() {
    const newClient: Client = {
      id: Date.now(),
      name: this.name,
      email: this.email,
      createdAt: new Date(),
      liked: false,
    };
    this.clients.unshift(newClient);
    this.name = '';
    this.email = '';
  }

  toggleLike(client: Client) {
    client.liked = !client.liked;
  }

  get recentClients() {
    return this.clients.slice(0, 3);
  }

  get likedClients() {
    return this.clients.filter(c => c.liked);
  }


constructor(private router: Router) {}

goToProjects(client: Client) {
  this.router.navigate(['/clients', client.id, 'projects']);
}
}
