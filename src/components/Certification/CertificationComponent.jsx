import { useState } from 'react';
import styled from 'styled-components';
import Certificate from './Certificate';
import CertificationModal from './CertificateModal';
import { CERTIFICATIONS } from './CERTIFICATIONS';
import { media } from '../../styles/utils/mediaQuery';

const CertificationComponent = ({ company }) => {
  const data = CERTIFICATIONS[company] || { certifications: [] };
  const items = data.certifications || [];
  const isPatent = company === 'PATENTS';

  // 특허는 이미지 + 모달 유지
  const [currentCert, setCurrentCert] = useState(null);
  const showModal = (cert) => setCurrentCert(cert);
  const closeModal = () => setCurrentCert(null);

  if (isPatent) {
    return (
      <S.GridImages>
        {items.map((c, idx) => (
          <Certificate
            key={idx}
            showModal={() => showModal(c.certification)}
            image={c.certification}
            title={c.title}
          />
        ))}
        {currentCert && (
          <CertificationModal image={currentCert} setModalOpen={closeModal} />
        )}
      </S.GridImages>
    );
  }

  // 나머지는 심플 리스트 (회사별 컬러 포인트)
  return (
    <S.ListWrap aria-label="보유 인증서 목록">
      {items.length === 0 ? (
        <S.Empty>등록된 인증서가 없습니다.</S.Empty>
      ) : (
        <S.SimpleList role="list">
          {items.map((c, idx) => (
            <li key={idx} role="listitem">
              <S.Item $brand={company} title={c.title}>
                <S.Bullet $brand={company} aria-hidden="true" />
                <S.Text>{c.title}</S.Text>
              </S.Item>
            </li>
          ))}
        </S.SimpleList>
      )}
    </S.ListWrap>
  );
};

export default CertificationComponent;

/* ========== styles ========== */
const S = {
  // 특허(이미지)용 기존 그리드
  GridImages: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 4rem;
    ${media.tablet`grid-template-columns: repeat(3, 1fr);`}
  `,

  // 텍스트 리스트 래퍼
  ListWrap: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  `,

  // 심플 리스트: 반응형 그리드
  SimpleList: styled.ul`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.8rem 2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    ${media.tablet`grid-template-columns: repeat(2, minmax(0, 1fr));`}
    ${media.desktop`grid-template-columns: repeat(3, minmax(0, 1fr));`}
  `,

  // 한 줄짜리 아이템 카드
  Item: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 0;
    padding: 1.2rem 1.4rem;
    border-radius: 16px;
    background: #f9fafb;
    box-shadow:
      inset 0 0 0 1px rgba(0, 0, 0, 0.05),
      0 3px 8px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      background 0.15s ease;

    &:hover {
      transform: translateY(-2px);
      background: #f3f4f6;
      box-shadow:
        inset 0 0 0 1px rgba(0, 0, 0, 0.07),
        0 6px 14px rgba(0, 0, 0, 0.08);
    }
  `,
  // 회사별 색 포인트(왼쪽 점)
  // 브랜드 색 포인트 점
  Bullet: styled.span`
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    flex: 0 0 auto;
    background: ${({ theme, $brand }) =>
      ($brand && theme?.color?.[$brand]) || '#333'};
    box-shadow: 0 0 0 5px
      ${({ theme, $brand }) =>
        (($brand && theme?.color?.[$brand]) || '#333') + '22'};
  `,

  // 텍스트
  Text: styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: #111;
    letter-spacing: 0.01em;
    line-height: 1.8;
    word-break: keep-all;
  `,

  Empty: styled.div`
    text-align: center;
    color: #6b7280;
    font-size: 1.1rem;
    padding: 4rem 0;
  `,
};
