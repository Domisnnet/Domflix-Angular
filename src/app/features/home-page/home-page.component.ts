import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogRowComponent } from '@app/features/catalog-row/catalog-row.component';
import { ContentService } from '@app/core/services/content.service';
import { ProjectModel } from '@app/core/models/project.model';
import { CaseStudyModel } from '@app/core/models/case-study.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    CatalogRowComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  featuredProjects$!: Observable<ProjectModel[]>;
  caseStudies$!: Observable<CaseStudyModel[]>;
  experiments$!: Observable<ProjectModel[]>;

  constructor(private contentService: ContentService) {}
  ngOnInit(): void {
    this.featuredProjects$ = this.contentService.getFeaturedProjects();
    this.caseStudies$ = this.contentService.getCaseStudies();
    this.experiments$ = this.contentService.getExperiments();
  }
}