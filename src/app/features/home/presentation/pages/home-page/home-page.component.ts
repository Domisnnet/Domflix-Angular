import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CatalogRowComponent } from '@app/features/home/presentation/components/catalog-row/catalog-row.component';
import { ContentService } from '@app/core/services/content.service';
import { ProjectModel } from '@app/core/models/project.model';
import { mapCaseStudyToProject } from '@app/core/models/case-study.mapper';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CatalogRowComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  featuredProjects$!: Observable<ProjectModel[]>;
  caseStudies$!: Observable<ProjectModel[]>;
  experiments$!: Observable<ProjectModel[]>;
  constructor(private contentService: ContentService) {}
  ngOnInit(): void {
    this.featuredProjects$ = this.contentService.getFeaturedProjects();
    this.experiments$ = this.contentService.getExperiments();
    this.caseStudies$ = this.contentService.getCaseStudies().pipe(map(mapCaseStudyToProject));
  }
}