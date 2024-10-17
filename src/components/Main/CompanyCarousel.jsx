import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import hero1 from '../../assets/images/hero/carone/caroneCeo.webp';
import hero2 from '../../assets/images/hero/ce/ce.webp';
import hero3 from '../../assets/images/hero/home/home.webp';
import hero4 from '../../assets/images/hero/sg/sg.webp';
import hero5 from '../../assets/images/hero/si/si.webp';
import hero6 from '../../assets/images/hero/total/total.webp';
import hero7 from '../../assets/images/hero/total/total2.webp';

const companyNames = [
  '에너지스토리',
  '자동차환경',
  '카원',
  '에스지산업',
  '토탈',
  '세명인텍',
  '황지',
];
const companyImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

const CompanyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % companyImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === 'up' || direction === 'left') {
      setActiveIndex((prev) =>
        prev === 0 ? companyNames.length - 1 : prev - 1,
      );
    } else {
      setActiveIndex((prev) =>
        prev === companyNames.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const getVisibleCompanies = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (activeIndex + i + companyNames.length) % companyNames.length;
      visible.push({ name: companyNames[index], index });
    }
    return visible;
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image
          as={motion.img}
          src={companyImages[activeIndex]}
          alt={`${companyNames[activeIndex]} image`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </S.ImageContainer>
      <S.MenuBar>
        <S.ArrowButton onClick={() => handleArrowClick('up')} className="up">
          ↑
        </S.ArrowButton>
        <S.ArrowButton
          onClick={() => handleArrowClick('left')}
          className="left"
        >
          ←
        </S.ArrowButton>
        <S.CompanyList>
          {getVisibleCompanies().map(({ name, index }, i) => (
            <S.CompanyItem
              key={`${index}-${i}`}
              isActive={index === activeIndex}
              isCentered={i === 2}
            >
              {name}
            </S.CompanyItem>
          ))}
        </S.CompanyList>
        <S.ArrowButton
          onClick={() => handleArrowClick('right')}
          className="right"
        >
          →
        </S.ArrowButton>
        <S.ArrowButton
          onClick={() => handleArrowClick('down')}
          className="down"
        >
          ↓
        </S.ArrowButton>
      </S.MenuBar>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `,
  ImageContainer: styled.div`
    width: 100%;
    height: 100%;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  MenuBar: styled.div`
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 1.5rem;
    border-radius: 20px;
    width: 20rem;
    height: 45rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
      right: 0;
      left: 0;
      bottom: 2rem;
      top: auto;
      transform: none;
      width: 90%;
      max-width: 600px;
      height: auto;
      flex-direction: row;
      margin: 0 auto;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
    }
  `,
  CompanyList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    width: 100%;

    @media (max-width: 1024px) {
      flex-direction: row;
      overflow-x: auto;
      justify-content: flex-start;
      padding: 0 1rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `,
  CompanyItem: styled.div`
    padding: 1.5rem;
    background-color: ${(props) => (props.isActive ? '#ffffff' : '#f0f0f0')};
    opacity: ${(props) => (props.isActive ? 1 : 0.8)};
    border-radius: 15px;
    text-align: center;
    box-shadow: ${(props) =>
      props.isActive
        ? '0 8px 20px rgba(0, 0, 0, 0.15)'
        : '0 4px 10px rgba(0, 0, 0, 0.1)'};
    font-weight: ${(props) => (props.isActive ? '600' : '400')};
    font-size: 1.3rem;
    transform: ${(props) => (props.isCentered ? 'scale(1.1)' : 'scale(1)')};
    transition: all 0.3s ease;

    @media (max-width: 1024px) {
      flex: 0 0 auto;
      width: 12rem;
      height: 4rem;
      padding: 0.5rem;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
      word-break: break-word;
      margin: 0 0.5rem;
    }
  `,
  ArrowButton: styled.button`
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
      transform: scale(1.1);
    }

    &.left,
    &.right {
      display: none;
    }

    @media (max-width: 1024px) {
      &.up,
      &.down {
        display: none;
      }
      &.left,
      &.right {
        display: block;
        font-size: 1.5rem;
        padding: 0.8rem;
        margin: 0 0.5rem;
      }
    }
  `,
};

export default CompanyCarousel;
