import styled from 'styled-components';
import { MAP_CONTENTS } from '../../constants/MAP_CONTENTS';

const Map = ({ company }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <S.Img src={MAP_CONTENTS[company].imageSrc} />
      <S.CompanyName>{MAP_CONTENTS[company].name}</S.CompanyName>
      <S.Table>
        <colgroup>
          <S.Col />
          <col style={{ width: 'auto' }} />
        </colgroup>
        <tbody>
          <S.Tr>
            <S.Th>주소</S.Th>
            <S.Td>{MAP_CONTENTS[company].address}</S.Td>
          </S.Tr>
          <S.Tr>
            <S.Th>TEL</S.Th>
            <S.Td>{MAP_CONTENTS[company].tel}</S.Td>
          </S.Tr>
          <S.Tr>
            <S.Th>FAX</S.Th>
            <S.Td>{MAP_CONTENTS[company].fax}</S.Td>
          </S.Tr>
        </tbody>
      </S.Table>
    </div>
  );
};

const S = {
  Col: styled.col`
    width: 10rem;

    @media (max-width: 767px) {
      width: 6rem;
    }
  `,
  Img: styled.img`
    width: 50rem;

    @media (max-width: 767px) {
      width: 27rem;
    }
  `,
  Table: styled.table`
    width: 100%;
    max-width: 50rem;
    border-collapse: collapse;
    border-top: 1px solid #000;

    @media (max-width: 767px) {
      width: 28rem;
    }
  `,
  Tr: styled.tr`
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  `,
  Th: styled.th`
    padding: 1rem;
    ${({ theme }) => theme.font.FONT14B}

    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT12SB}
    }
  `,
  Td: styled.td`
    ${({ theme }) => theme.font.FONT14}

    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT12}
    }
  `,
  CompanyName: styled.h1`
    width: 100%;
    max-width: 50rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    ${({ theme }) => theme.font.FONT20B}

    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT16B}
    }
  `,
};

export default Map;
