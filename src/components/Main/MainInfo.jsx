import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import rightImage from '../../assets/images/home/main_info.png';
import { media } from '../../styles/utils/mediaQuery';
import leftImage from './../../assets/images/home/main_info2.png';

const MainInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <S.Layout>
      <S.Container ref={ref}>
        <S.LeftSection>
          <S.TextContainer>
            <S.Title
              as={motion.h1}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              99.9%
            </S.Title>
            <S.SubText
              as={motion.p}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              폐기물의 99.9%를 자원으로 순환시키는 혁신적인 기술로 환경을 위해
              노력을 기울이고 있습니다.
            </S.SubText>
            <S.Link
              href="/business"
              as={motion.a}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              View Companies →
            </S.Link>
          </S.TextContainer>
          <S.LeftImage
            as={motion.div}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={leftImage} />
          </S.LeftImage>
        </S.LeftSection>
        <S.RightSection
          as={motion.div}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </S.Container>
    </S.Layout>
  );
};

export default MainInfo;

const S = {
  Layout: styled.div`
    display: flex;
    padding: 50px;
    justify-content: center;
    height: calc(100vh - 80px);

    ${media.tablet`
      padding: 80px;
    `}
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1100px;

    ${media.tablet`
      gap: 70px;
      text-align: start;
      flex-direction: row;
    `}
  `,
  LeftSection: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.tablet`
      width: 50%;
      height: 100%;
    `}
  `,
  LeftImage: styled.div`
    width: 100%;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    ${media.tablet`
      width: 100%;
      min-height: 300px;
    `}
  `,
  RightSection: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100px;
    align-items: center;
    background-image: url(${rightImage});
    background-position: 70% 70%;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    background-size: cover;

    ${media.tablet`
      flex: 1;
      height: auto;
      min-width: 300px;
      border-radius: 1rem;
      background-position: center;
    `}
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;

    ${media.tablet`
      gap: 10px;
    `}
  `,
  Title: styled.h1`
    font-size: 30px;
    font-weight: 800;
    color: ${({ theme }) => theme.color.TOTAL};

    ${media.tablet`
      font-size:50px;
    `}
  `,
  SubText: styled.p`
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.mainGray};
    width: 90%;

    ${media.tablet`
      font-size:20px;
      line-height: 25px;
    `}
  `,
  Link: styled.a`
    margin-top: 30px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;

    ${media.tablet`
      font-size:20px;
    `}
  `,
};
