import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import rightImage from '../../assets/images/home/main_info.png';
import { media } from '../../styles/utils/mediaQuery';
import leftImage from './../../assets/images/home/main_info2.png';

const MainInfo = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const isScrollDown =
    entry && entry.boundingClientRect.top > (entry.rootBounds?.top ?? 0);

  return (
    <S.Layout>
      <S.Container ref={ref}>
        <S.LeftSection>
          <S.TextContainer>
            <S.Title
              as={motion.h1}
              animate={
                isScrollDown
                  ? inView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              99.9%
            </S.Title>
            <S.SubText
              as={motion.p}
              animate={
                isScrollDown
                  ? inView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              폐기물의 99.9%를 자원으로 순환시키는 혁신적인 기술로 환경을 위해
              노력을 기울이고 있습니다.
            </S.SubText>
            <S.Link
              as={motion.a}
              href="/business"
              animate={
                isScrollDown
                  ? inView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              View Companies →
            </S.Link>
          </S.TextContainer>
          <S.LeftImage
            as={motion.div}
            animate={
              isScrollDown
                ? inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img src={leftImage} />
          </S.LeftImage>
        </S.LeftSection>
        <S.RightSection
          as={motion.div}
          animate={
            isScrollDown
              ? inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 100 }
              : { opacity: 1, x: 0 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </S.Container>
    </S.Layout>
  );
};

export default MainInfo;

const S = {
  Layout: styled.div`
    display: flex;
    padding: 5rem;
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
    height: 100%;
    margin: 0 auto;
    max-width: 110rem;

    ${media.tablet`
      text-align: start;
      flex-direction: row;
      max-height:50rem;
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
    height: 100%;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    ${media.tablet`
      width: 100%;
      min-width: 300px;
    `}
  `,
  RightSection: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 10rem;
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
    gap: 1rem;
    margin-bottom: 1.5rem;

    ${media.tablet`
      gap: 10px;
    `}
  `,
  Title: styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.TOTAL};

    ${media.tablet`
      font-size:50px;
    `}
  `,
  SubText: styled.p`
    font-size: 1.6rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.color.mainGray};
    width: 90%;

    ${media.tablet`
      font-size:20px;
      line-height: 25px;
    `}
  `,
  Link: styled.a`
    margin-top: 3rem;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: underline;

    ${media.tablet`
      font-size:20px;
    `}
  `,
};
