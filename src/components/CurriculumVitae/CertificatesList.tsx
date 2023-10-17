import CertificateCard from '@/components/CertificateCard';
import { Certificate } from '@/types/CurriculumVitae';

type CertificatesListProps = {
	certificates: Certificate[];
	className?: string;
};

function CertificatesList({ certificates, className }: CertificatesListProps) {
	return certificates.map((certificate: Certificate) => {
		return (
			<article key={`certificate-${certificate.name}-${certificate.issuer}`}>
				<CertificateCard certificate={certificate} />
			</article>
		);
	});
}

export default CertificatesList;
