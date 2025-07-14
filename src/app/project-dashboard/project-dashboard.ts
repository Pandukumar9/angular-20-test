import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  clientId: number;
  useCaseIds?: number[];
  assignedRole?: string;
}

@Component({
  selector: 'app-project-dashboard',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './project-dashboard.html',
  styleUrl: './project-dashboard.scss'
})
export class ProjectDashboard {
projects: Project[] = [];
  clientId: number = 0;

  name = '';
  description = '';
  selectedUseCases: number[] = [];
  assignedRole: string = '';

useCases = [
  { id: 1, name: 'Userstory' },
  { id: 2, name: 'Testcases' },
  { id: 3, name: 'Testscripts' },
  { id: 4, name: 'Testdata' },
  { id: 5, name: 'File Explanation' },
  { id: 6, name: 'Omniscript' }
];

selectedUseCaseIds: number[] = [];

  roles = ['Developer', 'Tester', 'Project Manager', 'Business Analyst'];

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.clientId = +params.get('id')!;
    });
  }

addProject() {
  const newProject: Project = {
    id: Date.now(),
    name: this.name,
    description: this.description,
    createdAt: new Date(),
    clientId: this.clientId,
    useCaseIds: [...this.selectedUseCaseIds],  // ✅ Save selected use cases
    assignedRole: this.assignedRole
  };

  this.projects.unshift(newProject);
  this.name = '';
  this.description = '';
  this.assignedRole = '';
  this.selectedUseCaseIds = [];
}


  get recentProjects() {
    return this.projects.slice(0, 3);
  }

  get allProjects() {
    return this.projects;
  }

getUseCaseNames(ids: number[] = []): string {
  return ids
    .map(id => this.useCases.find(u => u.id === id)?.name ?? '')
    .filter(name => !!name)
    .join(', ');
}

hasUseCases(project: Project): boolean {
  return Array.isArray(project.useCaseIds) && project.useCaseIds.length > 0;
}

  handleCardClick(project:any) {
    this.router.navigate([`/clients/${this.clientId}/projects/${project.id}/canvas`]);
  }

  toggleUseCaseSelection(id: number, checked: boolean) {
  if (checked) {
    if (!this.selectedUseCaseIds.includes(id)) {
      this.selectedUseCaseIds.push(id);
    }
  } else {
    this.selectedUseCaseIds = this.selectedUseCaseIds.filter(uid => uid !== id);
  }
}


}
