import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../../styles/utils/mediaQuery';
import BnbButton from './BnbButton';
import DropDown from '../DropDown';

const NAV_ITEMS = [
  { key: 'HOME', label: 'HOME', variant: 'home', path: '/' },
  { key: 'CE', label: '(주)자동차환경', variant: 'ce', path: '/ce' },
  { key: 'CARONE', label: '카원(유)', variant: 'carone', path: '/carone' },
  { key: 'ES', label: '(주)에너지스토리', variant: 'es', path: '/es' },
  { key: 'TOTAL', label: '(주)토탈', variant: 'total', path: '/total' },
  { key: 'HJ', label: '(주)황지', variant: 'hj', path: '/hj' },
  { key: 'SG', label: '(주)에스지산업', variant: 'sg', path: '/sg' },
  // { key: 'SI', label: '(주)세명인텍', variant: 'si', path: '/si' },
];

const pathToKey = (pathname) => {
  if (pathname === '/' || pathname === '') return 'HOME';
  const first = pathname.split('/')[1]?.toUpperCase() || '';
  const found = NAV_ITEMS.find((n) => n.path.slice(1).toUpperCase() === first);
  return found?.key || 'HOME';
};

const Bnb = ({ company }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 768);

  // 현재 경로 → 활성 탭 결정 (company prop이 있으면 우선)
  const activeKey = useMemo(() => {
    if (company) return company;
    return pathToKey(pathname);
  }, [company, pathname]);

  const handleClick = (key) => {
    const item = NAV_ITEMS.find((n) => n.key === key);
    if (item) navigate(item.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onResize = () => setIsMobileSize(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (isMobileSize) {
    // 모바일은 기존 드롭다운 UX 유지
    const status = NAV_ITEMS.reduce((acc, n) => {
      acc[n.key] = n.key === activeKey;
      return acc;
    }, {});
    return <DropDown handleClick={handleClick} buttonStatus={status} />;
  }

  return (
    <S.Nav role="navigation" aria-label="회사 네비게이션">
      {NAV_ITEMS.map((n) => (
        <BnbButton
          key={n.key}
          variant={n.variant}
          status={n.key === activeKey}
          onClick={() => handleClick(n.key)}
          aria-current={n.key === activeKey ? 'page' : undefined}
        >
          {n.label}
        </BnbButton>
      ))}
    </S.Nav>
  );
};

export default Bnb;

const S = {
  Nav: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background: ${({ theme }) => theme.color.black};
    overflow: hidden;

    ${media.desktop`
      grid-template-columns: repeat(7, 1fr);
    `}
  `,
};
