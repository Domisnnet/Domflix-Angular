import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectModel } from '@models/project.model';
import { CaseStudyModel } from '@models/case-study.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  getFeaturedProjects(): Observable<ProjectModel[]> {
    return of([]);
  }
  getCaseStudies(): Observable<CaseStudyModel[]> {
    return of([]);
  }
  getExperiments(): Observable<ProjectModel[]> {
    return of([]);
  }
}