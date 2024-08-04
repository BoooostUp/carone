import { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import caroneImg1 from '../../assets/images/carone/about1.webp';
import caroneImg2 from '../../assets/images/carone/about2.webp';
import caroneImg3 from '../../assets/images/carone/about3.webp';
import sgImg1 from '../../assets/images/sg/이온정제유.png';
import sgImg2 from '../../assets/images/sg/재생연료유.png';
import sgImg3 from '../../assets/images/sg/재생연료유_공정.png';
import { SUBCATEGORY_CONTENTS } from '../../constants/SUBCATEGORY_CONTENTS';
const SubCategoryBar = ({ company }) => {
  const activeCategory = {
    1: true,
    2: false,
    3: false,
  };
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(activeCategory);

  const onClick = (index, buttonNumber) => {
    if (active[buttonNumber]) return;
    setSelected(index);
    // Make previous active button false and current active button true
    setActive({
      ...active,
      [buttonNumber]: true,
      [selected + 1]: false,
    });
  };
  return (
    <>
      <S.ButtonWrapper>
        <S.ButtonContainer
          $variant={company}
          $status={active[1]}
          onClick={() => onClick(0, 1)}
        >
          {SUBCATEGORY_CONTENTS[company][0]}
        </S.ButtonContainer>
        <S.ButtonContainer
          $variant={company}
          $status={active[2]}
          onClick={() => onClick(1, 2)}
        >
          {SUBCATEGORY_CONTENTS[company][1]}
        </S.ButtonContainer>
        <S.ButtonContainer
          $variant={company}
          $status={active[3]}
          onClick={() => onClick(2, 3)}
        >
          {SUBCATEGORY_CONTENTS[company][2]}
        </S.ButtonContainer>
      </S.ButtonWrapper>
      {company === 'CARONE' && (
        <ImageBlock
          selected={selected}
          images={[caroneImg1, caroneImg2, caroneImg3]}
          altTexts={['석면운반/처리', '고철운반/처리', '취급 품목']}
        />
      )}
      {company === 'SG' && (
        <ImageBlock
          selected={selected}
          images={[sgImg1, sgImg2, sgImg3]}
          altTexts={['이온정제유', '재생연료유', '재생연료유 공정']}
        />
      )}
    </>
  );
};

const ImageBlock = ({ selected, images, altTexts }) => (
  <div>
    <img
      src={images[selected]}
      alt={altTexts[selected]}
      style={{ width: '100%' }}
    />
  </div>
);

export default SubCategoryBar;

const S = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin-bottom: 8rem;
    cursor: pointer;

    @media (max-width: 767px) {
      margin-bottom: 5rem;
    }
  `,

  ButtonContainer: styled.div`
    padding: 1.5rem;
    text-align: center;
    width: 100%;
    height: 5rem;
    object-fit: cover;
    border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};
    ${({ theme }) => theme.font.FONT16};
    ${({ $status, $variant }) =>
      $status &&
      css`
        color: ${({ theme }) => theme.color[$variant]};
        border-bottom: 2px solid ${({ theme }) => theme.color[$variant]};
      `}
  `,
};
