import { useState } from 'react';
import styled from 'styled-components';
import CertificationTestPage from './CertificationTestPage';
import { CERTIFICATIONS } from '../Certification/CERTIFICATIONS';

const CertificationCanvas = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      {CERTIFICATIONS.carone.certifications.map((certification, index) => (
        <CertificationTestPage
          showModal={showModal}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          image={certification}
          key={index}
        />
      ))}
    </div>
  );
};

export default CertificationCanvas;
