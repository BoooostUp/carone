import styled from 'styled-components';
import BnbButton from './BnbButton';
import { media } from '../../../styles/utils/mediaQuery';

const BnbCanvas = () => {
  return (
    <S.ButtonWrapper>
      <BnbButton variant="home" status={true} onClick={() => {}}>
        HOME
      </BnbButton>
      <BnbButton variant="ce" status={true} onClick={() => {}}>
        (주)자동차환경
      </BnbButton>
      <BnbButton variant="carone" onClick={() => {}}>
        (주)카원
      </BnbButton>
      <BnbButton variant="sg" onClick={() => {}}>
        (주)에스지산업
      </BnbButton>
      <BnbButton variant="total" onClick={() => {}}>
        (주)토탈
      </BnbButton>
      <BnbButton variant="si" onClick={() => {}}>
        (주)세명인텍
      </BnbButton>
    </S.ButtonWrapper>
  );
};

export default BnbCanvas;

const S = {
  ButtonWrapper: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${media.desktop`
     grid-template-columns: repeat(6, 1fr);

    `}
  `,
};
