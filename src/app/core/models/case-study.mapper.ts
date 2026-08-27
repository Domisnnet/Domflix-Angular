import { ProjectModel } from '@app/core/models/project.model';
import { CaseStudyModel } from '@app/core/models/case-study.model';

export function mapCaseStudyToProject(studies: CaseStudyModel[]): ProjectModel[] {
  return studies.map(
    (study, index) =>
      ({
        id: `case-study-${index}`,
        title: study.title,
        cover: study.cover,
        imageUrl: study.imageUrl || study.cover,
        description: study.summary || study.description,
        tech: study.stack,
        category: 'case-studies',
      }) as ProjectModel,
  );
}
