import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CaseStudyData {
  title: string;
  cover: string;
  summary: string;
  problem?: string;
  solution?: string;
  result?: string;
  stack?: string[];
}

@Component({
  selector: 'app-case-study-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study-card.component.html',
  styleUrls: ['./case-study-card.component.scss'],
})
export class CaseStudyCardComponent {
  @Input({ required: true }) caseStudy!: CaseStudyData;
}