import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryBar = ({ company, category, selectedButton, currentPage }) => {
  const [activeCategory, setActiveCategory] = useState(selectedButton);

  useEffect(() => {
    setActiveCategory(selectedButton);
  }, [selectedButton]);

  const handleClick = (item) => {
    setActiveCategory(item);
  };

  return (
    <S.Container>
      <S.Bar>
        <S.Label>카테고리</S.Label>
        <S.CategoryContainer $category={category}>
          {category.map((item) => (
            <S.CategoryLink
              key={item.menu}
              to={`/${company.toLowerCase()}/${currentPage}/${item.link}`}
            >
              <S.Category
                type="button"
                $company={company}
                $isActive={activeCategory === item.link}
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
    z-index: 8;
    width: 100%;
    background: linear-gradient(180deg, #f9fafb 0%, #ffffff 60%);
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  `,
  Bar: styled.div`
    margin: 0 auto;
    max-width: 76rem;
    padding: 1.25rem 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    @media (max-width: 767px) {
      padding: 1rem 1.25rem;
    }
  `,
  Label: styled.span`
    ${({ theme }) => theme.font.FONT12}
    color: ${({ theme }) => theme.color.deepGray};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  `,
  CategoryContainer: styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    row-gap: 0.75rem;

    @media (max-width: 767px) {
      justify-content: flex-start;
      gap: ${({ $category }) => ($category.length <= 3 ? '0.65rem' : '0.45rem')};
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
  Category: styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 9.5rem;
    padding: 0.95rem 1.35rem;
    white-space: nowrap;
    border-radius: 14px;
    border: 1px solid
      ${({ theme, $company, $isActive }) =>
        $isActive ? theme.color[$company] : theme.color.lightGray};
    background: ${({ theme, $company, $isActive }) =>
      $isActive
        ? `linear-gradient(135deg, ${theme.color[$company]}, ${theme.color[$company]}cc)`
        : '#f7f8fa'};
    color: ${({ theme, $company, $isActive }) =>
      $isActive ? theme.color.white : theme.color.mainGray};
    ${({ theme, $isActive }) =>
      $isActive ? theme.font.FONT16SB : theme.font.FONT16}

    box-shadow: ${({ $isActive }) =>
      $isActive ? '0 12px 28px rgba(0, 0, 0, 0.14)' : '0 8px 18px rgba(0, 0, 0, 0.05)'};
    cursor: pointer;
    position: relative;
    transition: transform 0.18s ease, box-shadow 0.2s ease, color 0.2s ease,
      border-color 0.2s ease, background 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ $isActive }) =>
        $isActive
          ? '0 14px 30px rgba(0, 0, 0, 0.16)'
          : '0 10px 24px rgba(0, 0, 0, 0.08)'};
      color: ${({ theme, $company, $isActive }) =>
        $isActive ? theme.color.white : theme.color[$company]};
      background: ${({ theme, $company, $isActive }) =>
        $isActive
          ? `linear-gradient(135deg, ${theme.color[$company]}, ${theme.color[$company]}cc)`
          : '#ffffff'};
    }

    &:focus-visible {
      outline: 3px solid ${({ theme, $company }) => `${theme.color[$company]}44`};
      outline-offset: 3px;
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${({ $isActive }) =>
        $isActive
          ? '0 10px 22px rgba(0, 0, 0, 0.12)'
          : '0 6px 16px rgba(0, 0, 0, 0.06)'};
    }

    @media (max-width: 767px) {
      min-width: 7.8rem;
      padding: 0.75rem 1rem;
      border-radius: 12px;
      ${({ theme }) => theme.font.FONT12}
    }
  `,
};

export default CategoryBar;
