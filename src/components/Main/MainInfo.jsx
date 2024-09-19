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
            <motion.div
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <S.Title>99.9%</S.Title>
            </motion.div>
            <motion.div
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <S.SubText>
                폐기물의 99.9%를 자원으로 순환시키는 혁신적인 기술로 환경을 위해
                노력을 기울이고 있습니다.
              </S.SubText>
            </motion.div>
            <motion.div
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <S.Link href="/business">View Companies →</S.Link>
            </motion.div>
          </S.TextContainer>
          <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <S.Image src={mainInfoImage2} />
          </motion.div>
        </S.LeftSection>
        <motion.div
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ flex: 1 }}
        >
          <S.RightSection />
        </motion.div>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    ${media.tablet`
       width: 50%;
    `}
  `,
  RightSection: styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    width: 100%;
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
  Image: styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
  `,
  Title: styled.h1`
    font-size: 50px;
    font-weight: 800;
    color: ${({ theme }) => theme.color.TOTAL};
  `,
  SubText: styled.p`
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.color.mainGray};
    width: 90%;
  `,
  Link: styled.a`
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
  `,
};
