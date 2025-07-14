import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-canvas',
  imports: [CommonModule],
  templateUrl: './project-canvas.html',
  styleUrl: './project-canvas.scss'
})
export class ProjectCanvas {
  selectedSection: string = 'overview'; // default section

  selectSection(section: string) {
    this.selectedSection = section;
  }
}
