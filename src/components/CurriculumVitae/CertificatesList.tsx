import { Certificate } from '@/types/CurriculumVitae';

import CertificateCard from '../CertificateCard';

type CertificatesListProps = {
	certificates: Certificate[];
	className?: string;
};

function CertificatesList({ certificates, className }: CertificatesListProps) {
	return (
		<section className={className}>
			<ul>
				{certificates.map((certificate: Certificate) => {
					return (
						<article
							key={`certificate-${certificate.name}-${certificate.issuer}`}
						>
							<CertificateCard certificate={certificate} />
						</article>
					);
				})}
			</ul>
		</section>
	);
}

export default CertificatesList;
