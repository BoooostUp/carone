import { useState } from 'react';
import styled from 'styled-components';
import Certificate from './Certificate';
import CertificationModal from './CertificateModal';
import { CERTIFICATIONS } from './CERTIFICATIONS';
import { media } from '../../styles/utils/mediaQuery';

const CertificationComponent = ({ company }) => {
  const [currentCert, setCurrentCert] = useState(null);
  const showModal = (cert) => {
    setCurrentCert(cert);
  };
  const closeModal = () => {
    setCurrentCert(null);
  };

  return (
    <S.CertificateContainer>
      {CERTIFICATIONS[company].certifications.map((certification, index) => (
        <Certificate
          showModal={() => showModal(certification.certification)}
          image={certification.certification}
          title={certification.title}
          key={index}
        />
      ))}
      {currentCert && (
        <CertificationModal image={currentCert} setModalOpen={closeModal} />
      )}
    </S.CertificateContainer>
  );
};

export default CertificationComponent;

const S = {
  CertificateContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    ${media.tablet`
      grid-template-columns: repeat(3, 1fr);
    `}
  `,
};
