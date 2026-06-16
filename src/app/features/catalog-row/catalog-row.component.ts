import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent, ProjectCardData } from '../project-card/project-card.component';

@Component({
  selector: 'app-catalog-row',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './catalog-row.component.html',
  styleUrls: ['./catalog-row.component.scss'],
})
export class CatalogRowComponent {
  @Input() title = '';
  @Input() items: ProjectCardData[] = [];
}