import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/utils/mediaQuery';

//TODO: 모바일일떄 사이즈 줄이고 중앙으로 배치하기

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
    <S.Backdrop onClick={closeModal}>
      <S.CertificationContainer ref={modalRef}>
        <button onClick={closeModal}>X</button>
        <S.CertificateImg src={image} alt="" />
      </S.CertificationContainer>
    </S.Backdrop>
  );
};

export default CertificateModal;

const S = {
  CertificationContainer: styled.div`
    max-width: 50rem;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px; // Optional: Adds rounded corners for a softer look
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    ${media.desktop`
      width: 60rem;
      height: auto;
    `}
  `,

  CertificateImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  Backdrop: styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,
};
