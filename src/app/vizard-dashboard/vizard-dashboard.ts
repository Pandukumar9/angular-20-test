import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vizard-dashboard',
  imports: [],
  templateUrl: './vizard-dashboard.html',
  styleUrl: './vizard-dashboard.scss'
})
export class VizardDashboard {
constructor(private router: Router) {}

getStarted() {
  this.router.navigate(['/signup']);
}

 user = {
    name: 'Vijay Kumar',
    email: 'vijay@example.com',
    image: 'https://i.pravatar.cc/30'
  };

  logout() {
    // clear session or call logout API
  }

}
