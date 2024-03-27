import { bool } from 'prop-types';
import styled from 'styled-components';
import BnbButton from './BnbButton';
import { media } from '../../../styles/utils/mediaQuery';

const Bnb = ({ status, onClick }) => {
  return (
    <S.ButtonWrapper>
      <BnbButton
        variant="home"
        status={status.home}
        onClick={() => onClick('home')}
      >
        HOME
      </BnbButton>
      <BnbButton variant="ce" status={status.ce} onClick={() => onClick('ce')}>
        (주)자동차환경
      </BnbButton>
      <BnbButton
        variant="carone"
        status={status.carone}
        onClick={() => onClick('carone')}
      >
        (주)카원
      </BnbButton>
      <BnbButton variant="sg" status={status.sg} onClick={() => onClick('sg')}>
        (주)에스지산업
      </BnbButton>
      <BnbButton
        variant="total"
        status={status.total}
        onClick={() => onClick('total')}
      >
        (주)토탈
      </BnbButton>
      <BnbButton variant="si" status={status.si} onClick={() => onClick('si')}>
        (주)세명인텍
      </BnbButton>
    </S.ButtonWrapper>
  );
};

//propTypes를 정해줍니다.
Bnb.propTypes = {
  status: {
    home: bool,
    ce: bool,
    carone: bool,
    sg: bool,
    total: bool,
    si: bool,
  },
};

export default Bnb;

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
