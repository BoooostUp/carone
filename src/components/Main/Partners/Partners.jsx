import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { MAIN_PARTNER_CONTENTS } from '../../../constants/MAIN_PARTNER_CONTENTS';

const Partners = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <S.Container>
      <S.Title>
        <S.Bold>환경을 위한 발걸음</S.Bold>은 계속됩니다.
      </S.Title>
      <S.SubText>더 밝은 미래와 더 나은 삶을 위해 노력하겠습니다.</S.SubText>
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
    width: 1100px;
    padding: 50px;
    margin: 30px auto;
  `,
  Background: styled.div`
    position: relative;
    height: 250px;
    background-image: url('/src/assets/images/home/partner_background.jpg');
    background-position: center 55%;
    border-radius: 0.5rem;
  `,
  Title: styled.h2`
    display: flex;
    justify-content: center;
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
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 40px;
  `,
  SlickContainer: styled.div`
    position: absolute;
    top: 150px;
    margin-left: 50px;

    .slick-list {
      width: 900px;
      background-color: white;
    }
    .slick-track {
      display: flex;
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
