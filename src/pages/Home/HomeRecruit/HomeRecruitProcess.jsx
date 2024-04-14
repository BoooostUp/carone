import styled from 'styled-components';
import recruitProcess from '../../../assets/images/home/recruitProcess.png';

const HomeRecruitProcess = () => {
  return <S.Image src={recruitProcess} alt="채용 절차" />;
};

export default HomeRecruitProcess;

const S = {
  Image: styled.img`
    width: 100%;
  `,
};
