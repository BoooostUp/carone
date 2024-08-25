import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryBar = ({ company, category, selectedButton, currentPage }) => {
  const [toggleButton, setToggleButton] = useState(selectedButton);

  useEffect(() => {
    setToggleButton(selectedButton);
  }, [selectedButton]);

  const handleClick = (item) => {
    setToggleButton(item);
  };

  return (
    <S.Container>
      <S.CategoryContainer $category={category}>
        {category.map((item) => (
          <Link
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
          </Link>
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    padding: 1rem 0;
  `,
  CategoryContainer: styled.div`
    display: flex;
    gap: 5rem;
    @media (max-width: 767px) {
      gap: ${({ $category }) => ($category.length === 3 ? '1rem' : '0rem')};
    }
  `,
  Category: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14rem;
    padding: 1.2rem 1rem;
    white-space: nowrap;
    background-color: ${({ theme, $company, $isToggled }) =>
      $isToggled && theme.color[$company]};
    border-radius: 18px;
    cursor: pointer;
    color: ${({ theme, $isToggled }) => $isToggled && theme.color.white};
    ${({ theme, $isToggled }) =>
      $isToggled ? theme.font.FONT16SB : theme.font.FONT16}

    position:relative;
    transition: color 0.3 ease;
    &:hover {
      color: ${({ theme, $company, $isToggled }) =>
        $isToggled ? theme.color.white : theme.color[$company]};
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -4px; /* Adjust the distance between the text and the underline */
      left: 0;
      right: 0;
      height: 2px; /* Thickness of the underline */
      background-color: ${({ theme, $company }) =>
        theme.color[$company]}; /* Underline color */
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.3s ease; /* Smooth underline transition */
    }

    &:hover:after {
      transform: scaleX(1);
    }

    @media (max-width: 767px) {
      width: 9rem;
      border-radius: 14px;
      ${({ theme }) => theme.font.FONT12}
    }
  `,
};

export default CategoryBar;
