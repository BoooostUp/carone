import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryBar = ({ company, category, selectedButton, currentPage }) => {
  const [toggleButton, setToggleButton] = useState(selectedButton);
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    setToggleButton(selectedButton);
  }, [selectedButton]);

  useEffect(() => {
    const handleScroll = () => {
      setIsElevated(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (item) => {
    setToggleButton(item);
  };

  return (
    <S.Container $isElevated={isElevated}>
      <S.Bar>
        <S.CategoryContainer $category={category}>
          {category.map((item) => (
            <S.CategoryLink
              key={item.menu}
              to={`/${company.toLowerCase()}/${currentPage}/${item.link}`}
            >
              <S.Category
                $company={company}
                $isToggled={toggleButton === item.link}
                onClick={() => handleClick(item.link)}
              >
                {item.menu}
              </S.Category>
            </S.CategoryLink>
          ))}
        </S.CategoryContainer>
      </S.Bar>
    </S.Container>
  );
};

const S = {
  Container: styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    box-shadow: ${({ $isElevated }) =>
      $isElevated ? '0 6px 18px rgba(0, 0, 0, 0.06)' : 'none'};
    transition: box-shadow 0.25s ease;
  `,
  Bar: styled.div`
    margin: 0 auto;
    max-width: 76rem;
    padding: 1rem 2rem;
  `,
  CategoryContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    row-gap: 0.75rem;

    @media (max-width: 767px) {
      justify-content: flex-start;
      gap: ${({ $category }) => ($category.length === 3 ? '0.5rem' : '0.35rem')};
      overflow-x: auto;
      padding-bottom: 0.25rem;
      &::-webkit-scrollbar {
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.color.lightGray};
        border-radius: 999px;
      }
    }
  `,
  CategoryLink: styled(Link)`
    text-decoration: none;
  `,
  Category: styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 10rem;
    padding: 1rem 1.5rem;
    white-space: nowrap;
    border-radius: 999px;
    border: 1px solid
      ${({ theme, $company, $isToggled }) =>
        $isToggled ? theme.color[$company] : theme.color.lightGray};
    background: ${({ theme, $company, $isToggled }) =>
      $isToggled ? `linear-gradient(135deg, ${theme.color[$company]}, ${theme.color[$company]}CC)` : theme.color.white};
    color: ${({ theme, $company, $isToggled }) =>
      $isToggled ? theme.color.white : theme.color[$company]};
    ${({ theme, $isToggled }) =>
      $isToggled ? theme.font.FONT16SB : theme.font.FONT16}

    box-shadow: ${({ $isToggled }) =>
      $isToggled ? '0 10px 24px rgba(0, 0, 0, 0.12)' : '0 6px 18px rgba(0, 0, 0, 0.04)'};
    cursor: pointer;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.25s ease, color 0.25s ease,
      border-color 0.25s ease, background 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
      color: ${({ theme, $company }) => theme.color[$company]};
      background: ${({ theme, $isToggled, $company }) =>
        $isToggled
          ? `linear-gradient(135deg, ${theme.color[$company]}, ${theme.color[$company]}CC)`
          : 'rgba(0, 0, 0, 0.02)'};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme, $company }) => `${theme.color[$company]}44`};
      outline-offset: 3px;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 12%;
      right: 12%;
      height: 3px;
      border-radius: 999px;
      background-color: ${({ theme, $company }) => theme.color[$company]};
      transform: scaleX(${({ $isToggled }) => ($isToggled ? 1 : 0)});
      transform-origin: center;
      transition: transform 0.3s ease;
      opacity: ${({ $isToggled }) => ($isToggled ? 1 : 0.9)};
    }

    @media (max-width: 767px) {
      min-width: 8rem;
      padding: 0.8rem 1.1rem;
      border-radius: 16px;
      ${({ theme }) => theme.font.FONT12}
    }
  `,
};

export default CategoryBar;
