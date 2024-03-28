import { useState } from 'react';
import Certificate from './Certificate';
import CertificationModal from './CertificateModal';
import { CERTIFICATIONS } from '../Certification/CERTIFICATIONS';

const CertificationCanvas = () => {
  const [currentCert, setCurrentCert] = useState(null);
  const showModal = (cert) => {
    setCurrentCert(cert);
  };
  const closeModal = () => {
    setCurrentCert(null);
  };

  return (
    <div>
      {CERTIFICATIONS.carone.certifications.map((certification, index) => (
        <Certificate
          showModal={() => showModal(certification)}
          image={certification}
          key={index}
        />
      ))}
      {currentCert && (
        <CertificationModal image={currentCert} setModalOpen={closeModal} />
      )}
    </div>
  );
};

export default CertificationCanvas;
