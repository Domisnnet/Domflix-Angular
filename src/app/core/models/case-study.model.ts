export interface CaseStudyModel {
  title: string;
  cover: string;
  summary: string;
  problem?: string;
  solution?: string;
  result?: string;
  imageUrl: string;
  description: string;
  stack?: string[];
}