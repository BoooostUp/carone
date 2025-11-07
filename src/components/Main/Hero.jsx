// src/components/Hero/Hero.jsx
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import WelcomeBox from './WelcomeBox';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';
import { HERO_CONTENTS } from '../../constants/HERO_CONTENTS';
import { HERO_VIDEOS } from '../../constants/HERO_VIDEOS';
import { HERO_IMAGES } from '../../constants/HERO_IMAGES';

export const getAutoHeroSize = ({ company, page, link, fallback = 'lg' }) => {
  const normalizedCompany = (company || '').toUpperCase();

  if (normalizedCompany === 'HOME') {
    const isHomeSub = !!link || (page && page !== 'home');
    return isHomeSub ? 'sm' : 'lg';
  }
  if (link) return 'sm';
  if (page && page !== 'home') return 'md';
  return fallback;
};

// utils/path.ts (또는 Hero.jsx 상단에 함께)
export const getPathInfo = (loc) => {
  // HashRouter면 hash 사용, BrowserRouter면 pathname 사용
  const raw = loc.hash?.startsWith('#')
    ? loc.hash.slice(1)
    : loc.pathname || '/';

  // 쿼리/해시 조각 제거
  const cleaned = raw.split('?')[0].split('#')[0];

  // 베이스 경로가 있으면 여기서 제거하고 싶으면 아래처럼:
  // const withoutBase = cleaned.replace(/^\/(app|home)\//, '/'); // 필요하면 수정

  const parts = cleaned.replace(/^\/+/, '').split('/'); // ['', 'ceo'] → ['ceo']
  const [first, second] = parts;

  // HOME 하위 후보: /ceo | /business | /location | /process | /recruit/process
  let homeLink = null;
  if (['ceo', 'business', 'location', 'process'].includes(first))
    homeLink = first;
  if (first === 'recruit' && second === 'process') homeLink = 'process';

  return {
    raw,
    cleaned,
    parts,
    slug: first || '',
    homeLink,
  };
};

const Hero = ({
  size,
  align = 'center',
  link,
  company = 'HOME',
  isMain,
  page = 'home',
  showScrollCue = false,
}) => {
  const location = useLocation();
  const { raw, cleaned, parts, slug, homeLink } = getPathInfo(location); // ❷ 튼튼한 파싱

  // HOME 하위 경로로 들어오면 company를 HOME 취급, link 보정
  const effectiveCompany = homeLink ? 'HOME' : company;
  const effectiveLink = homeLink ?? link;

  const autoSize =
    size ||
    getAutoHeroSize({
      company: effectiveCompany,
      page,
      link: effectiveLink,
    });

  const textContent =
    (effectiveLink
      ? HERO_CONTENTS[effectiveCompany]?.[effectiveLink]
      : HERO_CONTENTS[effectiveCompany]?.[page]) ??
    FOOTER_CONTENTS[effectiveCompany]?.[page] ??
    '';

  const videoSrc = HERO_VIDEOS[effectiveCompany]?.[page] ?? null;
  const imageSrc =
    HERO_IMAGES[effectiveCompany]?.[page] ??
    HERO_IMAGES[effectiveCompany]?.home ??
    null;

  return (
    <S.Container $size={autoSize} $align={align} data-hero>
      {videoSrc ? (
        <>
          <S.BackgroundVideo
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={imageSrc || undefined}
            aria-hidden
          />
          <S.Overlay />
        </>
      ) : imageSrc ? (
        <>
          <S.BackgroundImage $src={imageSrc} />
          <S.Overlay />
        </>
      ) : (
        <S.BackgroundFallback />
      )}

      <S.Text $size={autoSize}>{textContent}</S.Text>
      {showScrollCue && <S.ScrollCue>⌄</S.ScrollCue>}
    </S.Container>
  );
};

export default Hero;

/* ===================== styles ===================== */
const S = {
  Container: styled.div`
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    overflow: hidden;

    ${({ $size }) => {
      const map = { sm: 40, md: 70, lg: 100 };
      const h = map[$size] || 100;
      // ❻ dvh → svh → vh 폴백
      return `
        min-height: ${h}dvh;
        @supports not (height: 1dvh) { min-height: ${h}svh; }
        @supports not (height: 1svh) { min-height: ${h}vh; }
      `;
    }}
  `,

  DebugBar: styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 6px 8px;
    border-radius: 8px;
    font-size: 12px;
    color: #d1f4ff;
    pointer-events: none;
  `,

  BackgroundVideo: styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
  `,
  BackgroundImage: styled.div`
    position: absolute;
    inset: 0;
    background-image: ${({ $src }) => `url(${$src})`};
    background-size: cover;
    background-position: center;
    z-index: 0;
    pointer-events: none;
  `,
  BackgroundFallback: styled.div`
    position: absolute;
    inset: 0;
    background: #0b0f14;
    z-index: 0;
    pointer-events: none;
  `,
  Overlay: styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.35) 35%,
        rgba(0, 0, 0, 0.55) 100%
      ),
      radial-gradient(
        120% 120% at 50% 60%,
        rgba(0, 0, 0, 0) 40%,
        rgba(0, 0, 0, 0.45) 100%
      );
    mix-blend-mode: multiply;
  `,

  Text: styled.h1`
    z-index: 2;
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
    white-space: pre-line;
    font-weight: 800;
    line-height: 1.15;

    ${({ $size }) => {
      if ($size === 'sm')
        return `padding:1rem;font-size:clamp(1.4rem,4.8vw,2.1rem);`;
      if ($size === 'md')
        return `padding:2rem;font-size:clamp(2rem,5.8vw,3rem);`;
      return `padding:4rem;font-size:clamp(2.4rem,6.4vw,3.6rem);`;
    }}
  `,

  WelcomeBoxWrapper: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  `,
  ScrollCue: styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    opacity: 0.8;
    font-size: 1.6rem;
    animation: bounce 1.6s infinite;
    @keyframes bounce {
      0%,
      100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(6px);
      }
    }
  `,
};
