import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CompanyCarousel from './CompanyCarousel';
import DashBoard from './DashBoard';
import Intro from './Intro';
import { INTRO_CONTENT_CONTENTS as C } from '../../constants/INTRO_CONTENT_CONTENTS';
import { media } from '../../styles/utils/mediaQuery';

const IntroContent = () => {
  const [business, setBusiness] = useState(C.CONTENTS[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % C.CONTENTS.length;
          setBusiness(C.CONTENTS[newIndex]);
          return newIndex;
        });
        setIsAnimating(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (item, index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setBusiness(item);
      setActiveIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <>
      <Intro />
      <DashBoard />
      <S.Container>
        <S.Circle />
        <S.ImgTitleContainer>
          <S.TextBox
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={hasViewed ? { opacity: isAnimating ? 0.5 : 1, y: 0 } : {}}
            onViewportEnter={() => setHasViewed(true)}
            transition={{ duration: 0.5 }}
          >
            <S.Title>{business?.title}</S.Title>
            <S.ContentBox>
              <S.Content>{business?.element1}</S.Content>
              <S.Content>{business?.element2}</S.Content>
              <S.Content>{business?.element3}</S.Content>
              <S.Content>{business?.element4}</S.Content>
            </S.ContentBox>
          </S.TextBox>
          <S.Img
            as={motion.img}
            src={business.imageAddress}
            initial={{ opacity: 0, y: 20 }}
            animate={hasViewed ? { opacity: isAnimating ? 0.5 : 1, y: 0 } : {}}
            onViewportEnter={() => setHasViewed(true)}
            transition={{ duration: 0.5 }}
          />
        </S.ImgTitleContainer>
        <S.ButtonBox>
          {C.CONTENTS.map((item, index) => (
            <S.TitleButton
              key={index}
              onClick={() => handleClick(item, index)}
              isActive={activeIndex === index}
              index={index}
              as={motion.button}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={hasViewed ? { opacity: 1, y: 0 } : {}}
              onViewportEnter={() => setHasViewed(true)}
              transition={{ duration: 0.5 }}
            >
              {item.title}
            </S.TitleButton>
          ))}
        </S.ButtonBox>
      </S.Container>
      <CompanyCarousel />
    </>
  );
};

export default IntroContent;

const S = {
  Container: styled.article`
    position: relative;
    display: flex;
    overflow: hidden;
    height: calc(100vh - 9.5rem);
    margin: 0 auto;
    padding: 4rem 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(0, 70, 134, 0.05) 40%
    );

    ${media.desktop`
      flex-direction: row;
      height: calc(100vh - 8rem);
      margin: 0 auto;
      padding: 8rem 0;
      gap: clamp(4rem, 5vw, 14rem);
    `}
  `,
  TextBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.8rem 0.8rem;
    height: 19rem;
    gap: 2rem;
    text-align: center;

    ${media.tablet`
      text-align: start;
    `}

    ${media.desktop`
    height: 26rem;
    gap: 6rem;
`}
  `,
  Circle: styled.div`
    position: absolute;
    top: -7rem;
    left: -13rem;
    width: 50rem;
    height: 50rem;
    background-color: rgba(0, 70, 134, 0.05);
    border-radius: 50%;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 36rem;
      height: 36rem;
      background-color: white;
      border-radius: 50%;
    }
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT24B};

    ${media.desktop`
    ${({ theme }) => theme.font.FONT36B};
    `}
  `,
  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 25rem;
    gap: 1rem;

    ${media.desktop`
    width: 28rem;
  `}
  `,
  Content: styled.p`
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.font.FONT16};

    ${media.desktop`
    ${({ theme }) => theme.font.FONT18};
    `}
  `,
  ImgTitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    ${media.tablet`
      flex-direction: row;
      `}
    ${media.desktop`
      flex-direction: row;
      `}
  `,
  Img: styled.img`
    width: 100%;
    height: 20rem;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    ${media.desktop`
        max-width: 60rem;
        min-width: 45rem;
        height: 34rem;
        aspect-ratio: 16 / 9;
    `}
  `,
  ButtonBox: styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.8rem 0.8rem;
    gap: 5.4rem;

    ${media.desktop`
      flex-direction: column;
    `}
  `,
  TitleButton: styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: 0;
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.color.deepGray : 'transparent'};
    border: 2px solid ${({ theme }) => theme.color.deepGray};

    ${media.desktop`
      color: ${({ isActive, theme }) =>
        isActive ? theme.color.black : theme.color.deepGray};
      width: 18rem;
      position: relative;
      ${({ theme }) => theme.font.FONT20B};
      text-align: right;
      cursor: pointer;
      transition: color 0.5s ease;
      background-color: transparent;
      border: none;

      &:before {
      content: ${({ isActive, index }) => (isActive ? `'0${index + 1}'` : '')};
      position: absolute;
      left: 0;
      }

      &:after {
        content: '';
        position: absolute;
        width: ${({ isActive }) => (isActive ? '20rem' : '0')};
        height: 3.2rem;
        background: ${({ theme }) => theme.color.TOTAL};
        border-radius: 3rem 0.6rem 0.6rem 3rem;
        opacity: 0.2;
        top: -0.4rem;
        right: -1rem;
        transition: width 0.3s ease;
      }
    `}

    &:hover {
      color: ${({ theme }) => theme.color.black};
    }
  `,
};
