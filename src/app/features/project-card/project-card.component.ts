import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProjectCardData {
  title: string;
  cover: string;
  description?: string;
  tech?: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectCardData;
}