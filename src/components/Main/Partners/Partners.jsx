import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
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
    max-width: 1100px;
    width: 90%;
    padding: 50px;
    margin: 30px auto;
    text-align: center;

    ${media.desktop`
      width: 100%;
    `}
  `,
  Background: styled.div`
    position: relative;
    height: 250px;
    width: 100%;
    background-image: url('/src/assets/images/home/partner_background.jpg');
    background-position: center 55%;
    border-radius: 0.5rem;
  `,
  Title: styled.h2`
    font-size: 40px;
    font-weight: 500;
    color: black;
    margin-bottom: 25px;
  `,
  Bold: styled.span`
    font-size: 41px;
    font-weight: 700;
  `,
  SubText: styled.h3`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 40px;
  `,
  SlickContainer: styled.div`
    position: absolute;
    top: 150px;
    left: 50px;
    right: 50px;

    .slick-slider {
      max-width: 900px;
      width: 100%;
    }

    .slick-list {
      background-color: white;
    }
    .slick-track {
      display: flex;
      width: 80%;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  `,
  Box: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
  `,
  Image: styled.img`
    width: 100%;
    height: auto;
    padding: 10px;
    object-fit: contain;
  `,
};
