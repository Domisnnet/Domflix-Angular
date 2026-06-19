import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '@app/features/home/presentation/components/project-card/project-card.component';
import { ProjectModel } from '@app/core/models/project.model';

@Component({
  selector: 'app-catalog-row',
  standalone: true,
  imports: [
    CommonModule, 
    ProjectCardComponent
  ],
  templateUrl: './catalog-row.component.html',
  styleUrls: ['./catalog-row.component.scss'],
})
export class CatalogRowComponent {
  @Input() title = '';
  @Input() items: ProjectModel[] = [];
}