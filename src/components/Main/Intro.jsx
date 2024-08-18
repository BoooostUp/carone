import { motion } from 'framer-motion';
import SlotCounter from 'react-slot-counter';
import styled from 'styled-components';
import LogoIcon from '../../assets/icons/Logo.svg';
import { media } from '../../styles/utils/mediaQuery';
const Intro = () => {
  return (
    <S.MainWrapper>
      <S.ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: 'easeOut', duration: 2, y: { duration: 1 } }}
        >
          <S.Title>
            폐기물의 <S.Span>99%</S.Span> 자원으로..
          </S.Title>

          <S.Subtitle>환경을 위한 노력을 기울이고 있습니다.</S.Subtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: 'easeOut', duration: 2, y: { duration: 1 } }}
        >
          <S.Logo src={LogoIcon} />
        </motion.div>
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default Intro;

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 80px;
    background-color: ${({ theme }) => theme.color.white};
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: row;
    max-width: 800px;
    margin: 0 auto;
    gap: 2rem;
    ${media.desktop`
      flex-direction: row;
    `}
  `,

  Title: styled.div`
    color: ${({ theme }) => theme.color.primary};
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    ${media.desktop`
      font-size: 60px;
    `}
  `,

  Subtitle: styled.p`
    color: ${({ theme }) => theme.color.secondary};
    font-size: 15px;
    line-height: 1.6;
    ${media.desktop`
      font-size: 30px;
    `}
  `,

  Span: styled.span`
    color: ${({ theme }) => theme.color.TOTAL};
    font-size: 40px;
    ${media.desktop`
      font-size: 80px;
    `}
  `,

  Logo: styled.img`
    width: 15rem;
    cursor: pointer;
    ${media.desktop`
      width: 25rem;
    `}
  `,
};
