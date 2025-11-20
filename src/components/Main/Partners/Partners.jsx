import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import bgImage from '../../../assets/images/home/partner_background.jpg';
import { MAIN_PARTNER_CONTENTS } from '../../../constants/MAIN_PARTNER_CONTENTS';
import { media } from '../../../styles/utils/mediaQuery';

const Partners = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 520, settings: { slidesToShow: 2.5 } },
    ],
  };

  return (
    <S.Section aria-labelledby="partners-title">
      <S.Header>
        <S.Title id="partners-title">
          <b>환경을 위한 노력</b>은 계속됩니다.
        </S.Title>
        <S.Sub>더 밝은 미래와 더 나은 삶을 위해 최선을 다하겠습니다.</S.Sub>
      </S.Header>

      <S.Banner>
        <S.Bar>
          <Slider {...settings}>
            {MAIN_PARTNER_CONTENTS.map((item) => (
              <div key={item.id}>
                <S.LogoCard>
                  <img src={item.img} alt={item.name || 'partner'} />
                </S.LogoCard>
              </div>
            ))}
          </Slider>
        </S.Bar>
      </S.Banner>
    </S.Section>
  );
};

export default Partners;

/* ===================== styles ===================== */
const S = {
  Section: styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 56px 20px 72px;
  `,

  Header: styled.div`
    text-align: left;
    margin-bottom: 20px;

    ${media.desktop`
      text-align: center;
      margin-bottom: 28px;
    `}
  `,

  Title: styled.h2`
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.black};
    font-size: clamp(2rem, 4.5vw, 3rem);
    margin: 0 0 10px 0;

    b {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.color.TOTAL};
    }
  `,

  Sub: styled.p`
    color: ${({ theme }) => theme.color.mainGray};
    font-size: clamp(2rem, 2.5vw, 1.2rem);
    line-height: 1.7;
    margin: 0;
  `,

  Banner: styled.div`
    margin-top: 24px;
    border-radius: 16px;
    overflow: hidden;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center 55%;
    padding: clamp(14px, 3.5vw, 22px);
  `,

  Bar: styled.div`
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    padding: clamp(10px, 2.5vw, 16px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);

    /* slick 기본 정렬 안정화 */
    .slick-list {
      overflow: hidden;
    }
    .slick-slide > div {
      display: flex;
      justify-content: center;
    }
    .slick-track {
      display: flex;
      align-items: center;
      gap: clamp(10px, 2vw, 20px);
    }
  `,

  LogoCard: styled.div`
    height: clamp(84px, 16vw, 120px);
    width: clamp(140px, 22vw, 200px);
    border-radius: 12px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
    display: grid;
    place-items: center;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
    }

    img {
      width: 72%;
      height: 72%;
      object-fit: contain;
      /* filter: grayscale(100%); */
      opacity: 0.85;
      transition:
        filter 0.2s ease,
        opacity 0.2s ease,
        transform 0.2s ease;
    }

    /* &:hover img {
      filter: grayscale(0);
      opacity: 1;
      transform: scale(1.02);
    } */
  `,
};
