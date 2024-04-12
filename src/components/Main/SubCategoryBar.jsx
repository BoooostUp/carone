import { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import caroneImg2 from '../../assets/images/carone/고철운반.png';
import caroneImg1 from '../../assets/images/carone/사업내용.png';
import caroneImg3 from '../../assets/images/carone/취급품목.png';
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
      {selected === 0 ? (
        <div>
          <img src={caroneImg1} alt="석면운반/처리" style={{ width: '100%' }} />
        </div>
      ) : selected === 1 ? (
        <div>
          <img src={caroneImg2} alt="석면운반/처리" style={{ width: '100%' }} />
        </div>
      ) : (
        <div>
          <img src={caroneImg3} alt="석면운반/처리" style={{ width: '100%' }} />
        </div>
      )}
    </>
  );
};

export default SubCategoryBar;

const S = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin-bottom: 8rem;

    @media (max-width: 767px) {
      margin-bottom: 5rem;
    }
  `,

  ButtonContainer: styled.button`
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
