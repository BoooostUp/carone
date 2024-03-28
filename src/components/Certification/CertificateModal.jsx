import { useEffect, useRef } from 'react';
import styled from 'styled-components';
const CertificateModal = ({ setModalOpen, image }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setModalOpen]);
  return (
    <>
      <S.Backdrop onClick={closeModal} />
      <S.CertificationContainer ref={modalRef}>
        <button onClick={closeModal}>X</button>
        <img src={image} alt="" />
      </S.CertificationContainer>
    </>
  );
};

export default CertificateModal;

const S = {
  CertificationContainer: styled.div`
    width: 300px;
    height: 200px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  Backdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,
};
