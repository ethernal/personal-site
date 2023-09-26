import { Project } from '@/types/CurriculumVitae';
import { cn, getDataAttributesFromJSONKeywords } from '@/utils/utils';

import ProjectCard from '../ProjectCard';

type ProjectsListProps = {
	projects: Project[];
	className?: string;
};

function ProjectsList({ projects, className }: ProjectsListProps) {
	return (
		<section className={cn('grid grid-cols-1 md:grid-cols-2 gap-4', className)}>
			{projects?.map((project: Project, projectIndex: number) => {
				const {
					name,
					startDate,
					endDate,
					description,
					highlights,
					url,
					keywords,
					gallery,
				} = project;

				const dataKeywords = getDataAttributesFromJSONKeywords(keywords ?? []);

				return (
					<article
						key={`project-${name}-${projectIndex}`}
						data-has-keywords={Object.keys(dataKeywords).length}
						{...dataKeywords}
					>
						<ProjectCard project={project} />
					</article>
				);
			})}
		</section>
	);
}

export default ProjectsList;
