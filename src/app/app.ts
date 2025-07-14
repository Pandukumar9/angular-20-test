import { Component } from '@angular/core';
import { Account } from './account/account';
import { User } from './user/user';
import { Showlessmore } from './showlessmore/showlessmore';
import { Travel } from './travel/travel';
import { VizardDashboard } from './vizard-dashboard/vizard-dashboard';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CustomSummernote } from './custom-summernote/custom-summernote';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Account, User, Showlessmore, Travel, VizardDashboard, RouterOutlet,RouterLink,RouterLinkActive,CustomSummernote,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-20-test';

  constructor(private router:Router) {   }

  gotobenguluru() {
    // Navigate to the Benguluru component
    this.router.navigate(['/benguluru']);
  }

    content = '<p>Initial content here...</p>';

  onContentChange(data: string) {
    console.log('Editor updated:', data);
  }
}
