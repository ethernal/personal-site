import React, { Fragment } from 'react';

import { Certificate } from '@/types/CurriculumVitae';

import ResponsiveImage from '../ResponsiveImage';

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
						<Fragment
							key={`certificate-${certificate.name}-${certificate.issuer}`}
						>
							<li>
								{certificate.name} issued by {certificate.issuer} on{' '}
								{certificate.date}
							</li>
							<li>
								<ResponsiveImage src={certificate.url} alt={certificate.name} />
							</li>
						</Fragment>
					);
				})}
			</ul>
		</section>
	);
}

export default CertificatesList;
