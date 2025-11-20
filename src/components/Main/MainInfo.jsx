import styled from 'styled-components';
import { media } from '../../styles/utils/mediaQuery';
import mainInfoImage2 from './../../assets/images/home/main_info2.png';
import mainInfoBg from './../../assets/images/home/main_info.png';
import { Link as RouterLink } from 'react-router-dom';

const MainInfo = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.LeftSection>
          <S.GlassCard>
            <S.Badge>순환율</S.Badge>

            <S.TitleRow>
              <S.Title>
                99.9<span>%</span>
              </S.Title>
              <S.Pill>Zero Waste 지향</S.Pill>
            </S.TitleRow>

            <S.SubText>
              폐기물의 <b>99.9%</b>를 자원으로 순환시키는 혁신 기술로 환경부담을
              낮추고 지속 가능성을 높입니다.
            </S.SubText>

            <S.Actions>
              <S.PrimaryButton to="/business" aria-label="사업 소개 더 보기">
                더 보기
              </S.PrimaryButton>
              <S.SecondaryLink to="/" aria-label="문의하기 바로가기">
                문의하기
              </S.SecondaryLink>
            </S.Actions>
          </S.GlassCard>

          <S.ImageWrap>
            <img src={mainInfoImage2} alt="자원 순환 공정 이미지" />
          </S.ImageWrap>
        </S.LeftSection>

        <S.RightSection>
          <div className="overlay" />
          <div className="decor decor-a" />
          <div className="decor decor-b" />
        </S.RightSection>
      </S.Container>
    </S.Layout>
  );
};

export default MainInfo;

const S = {
  Layout: styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 64px 20px;
    min-height: calc(100dvh - 8rem);
    background: radial-gradient(
        1000px 500px at 10% -10%,
        rgba(33, 122, 84, 0.07),
        transparent 60%
      ),
      linear-gradient(90deg, #fff 0%, rgba(0, 70, 134, 0.03) 100%);

    ${media.tablet`
      padding: 90px 40px;
    `}
  `,

  Container: styled.div`
    display: grid;
    width: 100%;
    max-width: 1200px;
    gap: 32px;

    grid-template-columns: 1fr;
    ${media.tablet`
      grid-template-columns: 1.05fr 0.95fr;
      gap: 48px;
    `}
  `,

  LeftSection: styled.div`
    display: grid;
    align-content: start;
    gap: 22px;

    ${media.tablet`
      gap: 26px;
    `}
  `,

  GlassCard: styled.div`
    position: relative;
    border-radius: 20px;
    padding: 28px 26px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: saturate(140%) blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
    animation: cardIn 500ms ease-out both;

    @keyframes cardIn {
      from {
        transform: translateY(10px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,

  Badge: styled.span`
    display: inline-block;
    padding: 6px 12px;
    border-radius: 9999px;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #fff;
    background: ${({ theme }) => theme.color.TOTAL};
    box-shadow: 0 6px 16px ${({ theme }) => theme.color.TOTAL + '44'};
  `,

  TitleRow: styled.div`
    display: flex;
    align-items: baseline;
    gap: 14px;
    margin-top: 10px;

    ${media.tablet`
      gap: 16px;
      margin-top: 12px;
    `}
  `,

  Title: styled.h1`
    margin: 0;
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.TOTAL};
    font-size: clamp(3.2rem, 8vw, 5rem);

    span {
      font-weight: 800;
      font-size: 0.6em;
      margin-left: 2px;
    }
  `,

  Pill: styled.span`
    display: inline-flex;
    align-items: center;
    height: 34px;
    padding: 0 12px;
    border-radius: 9999px;
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.TOTAL};
    background: ${({ theme }) => theme.color.TOTAL + '14'};
    border: 1px solid ${({ theme }) => theme.color.TOTAL + '55'};
  `,

  SubText: styled.p`
    margin-top: 12px;
    font-size: clamp(2.05rem, 2.6vw, 1.4rem);
    line-height: 1.75;
    color: ${({ theme }) => theme.color.mainGray};

    b {
      color: ${({ theme }) => theme.color.black};
      font-weight: 800;
      font-size: 2rem;
    }
  `,

  Actions: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;

    ${media.tablet`
      gap: 14px;
      margin-top: 18px;
    `}
  `,

  PrimaryButton: styled(RouterLink)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 116px;
    height: 44px;
    padding: 0 16px;
    border-radius: 12px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    background: ${({ theme }) => theme.color.TOTAL};
    box-shadow: 0 10px 24px ${({ theme }) => theme.color.TOTAL + '55'};
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      filter 0.15s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 30px ${({ theme }) => theme.color.TOTAL + '66'};
      filter: brightness(1.02);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 8px 18px ${({ theme }) => theme.color.TOTAL + '44'};
      filter: brightness(0.98);
    }
  `,

  SecondaryLink: styled(RouterLink)`
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.15s ease;

    &:hover {
      color: ${({ theme }) => theme.color.TOTAL};
    }
  `,

  ImageWrap: styled.div`
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
    background: #fff;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      transform: scale(1.01);
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.03);
    }
  `,

  RightSection: styled.div`
    position: relative;
    width: 100%;
    min-height: 320px;
    border-radius: 18px;
    overflow: hidden;
    background-image: url(${mainInfoBg});
    background-size: cover;
    background-position: center;

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.12),
          rgba(0, 0, 0, 0.15)
        ),
        radial-gradient(
          600px 220px at 75% 10%,
          rgba(91, 178, 255, 0.18),
          transparent 60%
        ),
        radial-gradient(
          800px 320px at 0% 100%,
          rgba(33, 122, 84, 0.18),
          transparent 60%
        );
      mix-blend-mode: multiply;
    }

    .decor {
      position: absolute;
      border-radius: 50%;
      opacity: 0.35;
      filter: blur(18px);
      animation: float 6s ease-in-out infinite alternate;
    }

    .decor-a {
      width: 140px;
      height: 140px;
      right: 8%;
      top: 12%;
      background: ${({ theme }) => theme.color.TOTAL};
    }
    .decor-b {
      width: 180px;
      height: 180px;
      left: -40px;
      bottom: -40px;
      background: ${({ theme }) => theme.color.ES || '#5BB2FF'};
      animation-delay: 0.7s;
    }

    @keyframes float {
      from {
        transform: translateY(0) translateX(0);
      }
      to {
        transform: translateY(-12px) translateX(8px);
      }
    }

    ${media.tablet`
      min-height: 480px;
    `}
  `,
};
