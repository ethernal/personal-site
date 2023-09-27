import { Certificate } from '@/types/CurriculumVitae';

import CertificateCard from '../CertificateCard';

type CertificatesListProps = {
	certificates: Certificate[];
	className?: string;
};

function CertificatesList({ certificates, className }: CertificatesListProps) {
	return (
		<section className={className}>
			{certificates.map((certificate: Certificate) => {
				return (
					<article
						key={`certificate-${certificate.name}-${certificate.issuer}`}
						className="h-full"
					>
						<CertificateCard certificate={certificate} />
					</article>
				);
			})}
		</section>
	);
}

export default CertificatesList;
