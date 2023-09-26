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
						<ProjectCard
							project={project}
							// className="[background:radial-gradient(circle,rgba(34,193,195,0.9612045501794468)_0%,_rgba(125,167,190,0.9471989479385504)_38%,_rgba(253,187,45,0.9163866230085784)_100%)]"
							// className="[background:linear-gradient(0deg,_rgba(195,99,34,0.9612045501794468)_0%,_rgba(200,28,28,0.9359944661458334)_18%,_rgba(253,187,45,0.9163866230085784)_100%)]"
							className="[background:radial-gradient(circle,rgba(238,174,202,1)_0%,_rgba(148,187,233,1)_100%)]"
						/>
					</article>
				);
			})}
		</section>
	);
}

export default ProjectsList;
