import styled from 'styled-components';
import WelcomeBox from './WelcomeBox';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';
import { HERO_CONTENTS } from '../../constants/HERO_CONTENTS';
import { HERO_VIDEOS } from '../../constants/HERO_VIDEOS';
import { HERO_IMAGES } from '../../constants/HERO_IMAGES';

const Hero = ({ size, link, company, isMain, page }) => {
  // 1. 텍스트 가져오기
  const textContent = link
    ? HERO_CONTENTS[company]?.[link]
    : FOOTER_CONTENTS[company]?.[page] ?? '';

  // 2. 비디오 → 이미지 순으로 소스 결정
  //    (page 키가 없으면 main으로도 한 번 더 시도)
  const videoSrc =
    HERO_VIDEOS[company]?.[page] ?? HERO_VIDEOS[company]?.main ?? null;

  const imageSrc =
    HERO_IMAGES[company]?.[page] ?? HERO_IMAGES[company]?.main ?? null;

  return (
    <S.Container $size={size}>
      {videoSrc ? (
        <>
          <S.BackgroundVideo
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={imageSrc || undefined} // 로딩 전 이미지
          />
          <S.Overlay />
        </>
      ) : imageSrc ? (
        <>
          <S.BackgroundImage $src={imageSrc} />
          <S.Overlay />
        </>
      ) : (
        // 최후의 폴백
        <S.BackgroundFallback />
      )}

      <S.Text>{textContent}</S.Text>

      {company !== 'HOME' && isMain === 2 && (
        <S.WelcomeBoxWrapper>
          <WelcomeBox company={company} isMain={isMain} />
        </S.WelcomeBoxWrapper>
      )}
    </S.Container>
  );
};

export default Hero;

const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100dvh;
    overflow: hidden;

    @media (max-width: 767px) {
      min-height: 100svh;
    }
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
    background: #000;
    z-index: 0;
    pointer-events: none;
  `,

  Overlay: styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    pointer-events: none;
  `,

  Text: styled.h2`
    z-index: 2;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    padding: 10rem;
    ${({ theme }) => theme.font.FONT45B};

    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT28B};
      padding: 1rem;
      white-space: normal;
    }
  `,

  WelcomeBoxWrapper: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  `,
};
