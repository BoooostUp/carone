import React from 'react';
import styled from 'styled-components';

const wasteItems = [
  {
    icon: '🛢️',
    title: '폐기물 중간처분업 (소각)',
    location: '낙동강청',
    waste: '폐유, 폐유기용제, 할로겐족 폐유기용제, 폐페인트, 폐산, 폐알카리 등',
    type: '소각',
  },
  {
    icon: '🏭',
    title: '폐기물 중간처분업 (소각)',
    location: '울산시',
    waste: '사업장 지정 외 폐기물 중 소각대상 폐기물',
    type: '소각',
  },
  {
    icon: '♻️',
    title: '폐기물 종합재활용업',
    location: '낙동강청',
    waste: '폐페인트(액상)',
    type: '재활용',
  },
];

function TotalBusinessWaste() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">🗑️ Business Waste</span>
        <h2>영업대상 폐기물</h2>
        <p>
          토탈은 낙동강청 및 울산시 인허가를 통해 각종 산업폐기물을 안전하게
          소각·재활용하고 있습니다. 환경 기준에 맞춘 고온 소각과 원료화 과정을
          통해 폐기물의 친환경적 처리를 실현합니다.
        </p>
      </S.Header>

      <S.Table>
        <thead>
          <tr>
            <th>구분</th>
            <th>관할기관</th>
            <th>영업대상 폐기물</th>
            <th>처리방식</th>
          </tr>
        </thead>
        <tbody>
          {wasteItems.map((item) => (
            <tr key={item.title + item.location}>
              <td>
                <span className="icon">{item.icon}</span>
                {item.title}
              </td>
              <td>{item.location}</td>
              <td>{item.waste}</td>
              <td>
                <S.Badge $type={item.type}>{item.type}</S.Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>

      <S.Note>
        <h4>※ 스팀판매</h4>
        <p>
          폐기물을 소각하여 발생하는 열원을 스팀으로 전환해 공급합니다. 스팀
          사용 기업은 별도 설비 없이 공급을 받을 수 있어 비용 절감이 가능하며,
          스팀 생산 시 아산화탄소 발생이 적어 저탄소 녹색성장 정책에 부합합니다.
        </p>
      </S.Note>
    </S.Section>
  );
}

export default TotalBusinessWaste;

const S = {
  Section: styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 2rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 3rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.TOTAL};
      color: #fff;
      padding: 0.5rem 1.3rem;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 700;
      box-shadow: 0 4px 10px ${({ theme }) => theme.color.TOTAL + '55'};
    }

    h2 {
      ${({ theme }) => theme.font.FONT28B};
      margin-top: 1rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      ${({ theme }) => theme.font.FONT16};
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 0.6rem;
      line-height: 1.7;
      max-width: 680px;
      margin-left: auto;
      margin-right: auto;
    }
  `,
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border-radius: 1.2rem;
    overflow: hidden;

    th {
      background: ${({ theme }) => theme.color.TOTAL + '11'};
      color: ${({ theme }) => theme.color.black};
      font-weight: 700;
      padding: 1.2rem 1rem;
      border-bottom: 2px solid ${({ theme }) => theme.color.TOTAL + '33'};
      text-align: center;
      ${({ theme }) => theme.font.FONT16B};
    }

    td {
      padding: 1rem 1.2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      vertical-align: middle;
      text-align: center;
      color: ${({ theme }) => theme.color.deepGray};
      ${({ theme }) => theme.font.FONT14};

      .icon {
        margin-right: 0.4rem;
        font-size: 1.3rem;
      }

      &:first-child {
        text-align: left;
        font-weight: 600;
        color: ${({ theme }) => theme.color.black};
      }
    }

    tr:last-child td {
      border-bottom: none;
    }
  `,
  Badge: styled.span`
    display: inline-block;
    background: ${({ $type, theme }) =>
      $type === '소각' ? theme.color.TOTAL : theme.color.black + '66'};
    color: #fff;
    padding: 0.35rem 0.8rem;
    border-radius: 0.6rem;
    font-size: 0.8rem;
    font-weight: 600;
  `,
  Note: styled.div`
    background: ${({ theme }) => theme.color.TOTAL + '08'};
    border-left: 4px solid ${({ theme }) => theme.color.TOTAL};
    border-radius: 0.6rem;
    padding: 1.4rem 1.6rem;
    margin-top: 2.8rem;

    h4 {
      ${({ theme }) => theme.font.FONT16B};
      color: ${({ theme }) => theme.color.black};
      margin-bottom: 0.5rem;
    }

    p {
      ${({ theme }) => theme.font.FONT14};
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.6;
    }
  `,
};
