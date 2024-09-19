import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/utils/mediaQuery';
import mainInfoImage2 from './../../assets/images/home/main_info2.png';

const MainInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

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
              as={motion.a}
              href="/business"
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              View Companies →
            </S.Link>
          </S.TextContainer>
          <S.ImageBox>
            <S.Image
              as={motion.img}
              src={mainInfoImage2}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </S.ImageBox>
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
    padding: 3rem;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 9.5rem);
    margin-top: 5rem;

    ${media.tablet`
      margin-top: 5rem;
      padding: 8rem;
    `}

    ${media.desktop`
      height: calc(100vh - 8rem);
    `}
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;

    margin: 0 auto;
    max-width: 110rem;

    ${media.tablet`
      gap: 7rem;
      text-align: start;
      flex-direction: row;
      height: 100%;
      max-height:50rem;
    `}
  `,
  LeftSection: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;

    ${media.tablet`
       width: 50%;
       height:100%;
    `}
  `,
  RightSection: styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    background-image: url('/src/assets/images/home/main_info.png');
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    background-size: cover;

    ${media.tablet`
      border-radius: 1rem;
      background-position: center;
    `}
  `,
  ImageBox: styled.div`
    flex: 1;
    position: relative;
    width: 100%;
  `,
  Image: styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.5rem;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,
  Title: styled.h1`
    font-size: 5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.TOTAL};
  `,
  SubText: styled.p`
    font-size: 2rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.color.mainGray};
    width: 90%;
  `,
  Link: styled.a`
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 600;
    text-decoration: underline;
  `,
};
