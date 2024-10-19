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
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <S.Container>
      <S.Title>
        <S.Bold>환경을 위한 노력</S.Bold>은 계속됩니다.
      </S.Title>
      <S.SubText>
        더 밝은 미래와 더 나은 삶을 위해 최선을 다하겠습니다.
      </S.SubText>
      <S.Background>
        <S.SlickContainer>
          <Slider {...settings}>
            {MAIN_PARTNER_CONTENTS.map((item) => (
              <S.Box key={item.id}>
                <S.Image src={item.img} />
              </S.Box>
            ))}
          </Slider>
        </S.SlickContainer>
      </S.Background>
    </S.Container>
  );
};

export default Partners;

const S = {
  Container: styled.div`
    max-width: 110rem;
    width: 90%;
    padding: 5rem;
    margin: 3rem auto;
    text-align: left;

    ${media.desktop`
      width: 100%;
      text-align: center;
    `}
  `,
  Background: styled.div`
    position: relative;
    height: 15rem;
    width: 100%;
    background-image: url(${bgImage});
    background-position: center 55%;
    border-radius: 0.5rem;

    ${media.desktop`
      height: 25rem;
    `}
  `,
  Title: styled.h2`
    font-size: 3rem;
    font-weight: 500;
    color: black;
    margin-bottom: 2.5rem;

    ${media.tablet`
      font-size: 4rem;
    `}
  `,
  Bold: styled.span`
    font-size: 3.1rem;
    font-weight: 700;

    ${media.tablet`
      font-size: 4.1rem;
    `}
  `,
  SubText: styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 4rem;

    ${media.tablet`
      font-size: 2rem;
    `}
  `,
  SlickContainer: styled.div`
    position: absolute;
    top: 5rem;
    left: 5rem;
    right: 5rem;

    ${media.desktop`
      top: 150px;
    `}

    .slick-slider {
      max-width: 90rem;
      width: 100%;
    }

    .slick-list {
      background-color: white;
    }
    .slick-track {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      ${media.desktop`
        gap: 3rem;
    `}

      .slick-slide {
        text-align: center;
      }
    }
  `,
  Box: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 100%;
  `,
  Image: styled.img`
    width: 100%;
    height: auto;
    padding: 1rem;
    object-fit: contain;
  `,
};
