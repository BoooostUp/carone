import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../styles/utils/mediaQuery';

const MainArticle = ({ currentCompany = 'HOME', item, index = 0 }) => {
  const {
    id,
    title1,
    title2 = '',
    content1,
    content2 = '',
    imageAddress,
  } = item;

  const href =
    typeof id === 'string'
      ? `/${id.toLowerCase()}`
      : `/${currentCompany.toLowerCase()}/business/about`;

  // HOME일 때는 각 회사 색을, 그 외는 현재 회사 색을 사용
  const brandKey = currentCompany === 'HOME' ? id : currentCompany;

  return (
    <S.Section $flip={index % 2 === 1}>
      <S.ImageWrap>
        <Link to={href} aria-label={`${title1} 상세보기`}>
          <S.Picture>
            <img src={imageAddress} alt={title1} />
            <S.Overlay />
          </S.Picture>
        </Link>
      </S.ImageWrap>

      <S.Content>
        <S.Tag $brandKey={brandKey}>
          {typeof id === 'string' ? id : currentCompany}
        </S.Tag>

        <S.Title $brandKey={brandKey}>{title1}</S.Title>
        {content1 && <S.Paragraph>{content1}</S.Paragraph>}

        {/* {title2 && <S.SubTitle>{title2}</S.SubTitle>}
        {content2 && <S.Paragraph>{content2}</S.Paragraph>} */}

        <S.Actions>
          <S.CTA to={href} $brandKey={brandKey}>
            자세히 보기
          </S.CTA>
        </S.Actions>
      </S.Content>
    </S.Section>
  );
};

export default MainArticle;

/* ===================== styles ===================== */
const S = {
  Section: styled.article`
    --gap: clamp(2rem, 4vw, 6rem);
    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(3rem, 6vw, 6rem) 1.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gap);
    align-items: center;

    ${media.desktop`
      grid-template-columns: 1.1fr 1fr;
      grid-auto-flow: dense;
    `}

    /* 짝수 섹션은 좌우 반전 */
    ${({ $flip }) =>
      $flip &&
      media.desktop`
        & > div:first-child { order: 2; }
        & > div:last-child  { order: 1; }
      `}

    /* 섹션 배경 라이트톤 */
    &:nth-of-type(even) {
      background: rgba(0, 0, 0, 0.02);
      border-radius: 20px;
    }
  `,

  ImageWrap: styled.div`
    ${media.desktop` padding: 0 0.25rem; `}
  `,

  Picture: styled.div`
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 22px 48px rgba(0, 0, 0, 0.12);
    aspect-ratio: 16/10;
    background: #f5f6f7;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transform: scale(1);
      transition: transform 0.35s ease;
    }

    /* 데스크톱에서만 살짝 줌 호버 */
    @media (hover: hover) and (pointer: fine) {
      &:hover img {
        transform: scale(1.04);
      }
    }
  `,

  Overlay: styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.18)
    );
    pointer-events: none;
  `,

  Content: styled.div`
    max-width: 640px;
    margin-inline: auto;
  `,

  Tag: styled.span`
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-weight: 800;
    font-size: 0.95rem;
    letter-spacing: 0.02em;
    color: #fff;
    background: ${({ theme, $brandKey }) =>
      $brandKey && theme.color[$brandKey]
        ? theme.color[$brandKey]
        : theme.color.black};
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  `,

  Title: styled.h2`
    margin: 1rem 0 0.6rem;
    color: ${({ theme }) => theme.color.black};
    font-weight: 800;
    letter-spacing: -0.01em;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    line-height: 1.2;
    /* 브랜드 컬러로 밑줄 포인트 */
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 56px;
      height: 4px;
      margin-top: 10px;
      border-radius: 2px;
      background: ${({ theme, $brandKey }) =>
        $brandKey && theme.color[$brandKey]
          ? theme.color[$brandKey]
          : theme.color.black};
      opacity: 0.8;
    }
  `,

  SubTitle: styled.h3`
    margin-top: 1.1rem;
    font-size: clamp(1.2rem, 2.4vw, 1.6rem);
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
  `,

  Paragraph: styled.p`
    white-space: pre-line; /* 기존 줄바꿈 유지 */
    word-break: keep-all;
    color: ${({ theme }) => theme.color.deepGray};
    font-size: clamp(1.9rem, 2.2vw, 1.125rem);
    line-height: 1.8;
    margin-top: 0.6rem;
    overflow-wrap: anywhere;
  `,

  Actions: styled.div`
    margin-top: 1.4rem;
    display: flex;
    gap: 0.8rem;
  `,

  CTA: styled(Link)`
    --bg: ${({ theme, $brandKey }) =>
      ($brandKey && theme.color[$brandKey]) || '#111'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 1.2rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
    background: var(--bg);
    border-radius: 12px;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      opacity 0.2s ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
        opacity: 0.95;
      }
    }

    &:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 3px rgba(255, 255, 255, 0.9),
        0 0 0 6px rgba(0, 0, 0, 0.28);
    }
  `,
};
