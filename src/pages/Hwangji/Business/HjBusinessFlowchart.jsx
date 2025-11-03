import React from 'react';
import styled from 'styled-components';

function HjBusinessFlowchart() {
  return (
    <S.Section>
      <S.Header>
        <span className="tag">♻️ 폐기물 처리 Flow</span>
        <h2>㈜황지 매립처리 공정</h2>
        <p>
          황지는 <b>사업장 일반폐기물</b>을 안정적으로 매립하기 위해
          <b>반입 → 검수 → 성상 분류 → 안정화 → 매립</b>의 단계를 거칩니다.
        </p>
      </S.Header>

      <S.Timeline>
        <S.Item>
          <S.Badge>01</S.Badge>
          <S.Body>
            <h3>폐기물 반입</h3>
            <p>허가 차량으로 반입된 폐기물을 계량 후 접수합니다.</p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>02</S.Badge>
          <S.Body>
            <h3>검수</h3>
            <p>폐기물의 종류와 성상을 서류 및 육안으로 확인합니다.</p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>03</S.Badge>
          <S.Body>
            <h3>성상 분류</h3>
            <p>
              오니류, 소각재, 폐토사 등으로 구분하여 적합한 매립구역에
              배치합니다.
            </p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>04</S.Badge>
          <S.Body>
            <h3>안정화</h3>
            <p>지반 안정과 침출수 방지를 위해 흙과 혼합·압축합니다.</p>
          </S.Body>
          <S.Line />
        </S.Item>

        <S.Item>
          <S.Badge>05</S.Badge>
          <S.Body>
            <h3>매립</h3>
            <p>환경기준에 맞게 매립 후 사후 모니터링을 지속 실시합니다.</p>
          </S.Body>
        </S.Item>
      </S.Timeline>

      <S.Foot>
        ※ 황지는 현재 <b>행정절차 진행 중</b>이며, 향후 울산권역 내{' '}
        <b>안정적 폐기물 매립 인프라</b>로 운영될 예정입니다.
      </S.Foot>
    </S.Section>
  );
}

export default HjBusinessFlowchart;

const S = {
  Section: styled.section`
    max-width: 1300px;
    margin: 0 auto;
    padding: 9rem 2rem 10rem;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 6rem;

    .tag {
      display: inline-block;
      background: ${({ theme }) => theme.color.HJ || '#0033cc'};
      color: #fff;
      padding: 1.1rem 2.6rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 1.5rem;
      box-shadow: 0 8px 18px
        ${({ theme }) => (theme.color.HJ || '#0033cc') + '55'};
    }

    h2 {
      font-size: clamp(3.6rem, 5vw, 4rem);
      font-weight: 800;
      margin-top: 2rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.color.deepGray};
      margin-top: 1.8rem;
      line-height: 2;
      max-width: 900px;
      margin-inline: auto;

      b {
        color: ${({ theme }) => theme.color.HJ || '#0033cc'};
      }
    }
  `,
  Timeline: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
  `,
  Item: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    position: relative;
  `,
  Badge: styled.div`
    min-width: 4.4rem;
    height: 4.4rem;
    border-radius: 999px;
    background: #fff;
    border: 5px solid ${({ theme }) => theme.color.HJ || '#0033cc'};
    display: grid;
    place-items: center;
    font-weight: 800;
    color: ${({ theme }) => theme.color.HJ || '#0033cc'};
    font-size: 1.8rem;
  `,
  Body: styled.div`
    background: #f8faff;
    border: 2px solid rgba(0, 51, 204, 0.15);
    border-radius: 1.8rem;
    padding: 2rem 2.5rem;
    flex: 1;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);

    h3 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 0.8rem;
      color: ${({ theme }) => theme.color.black};
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color.deepGray};
      line-height: 1.9;
    }
  `,
  Line: styled.div`
    position: absolute;
    left: 2.3rem;
    top: 4.5rem;
    width: 3px;
    height: calc(100% + 2.4rem);
    background: ${({ theme }) => (theme.color.HJ || '#0033cc') + '55'};
  `,
  Foot: styled.p`
    margin-top: 6rem;
    text-align: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.deepGray};
    line-height: 2;

    b {
      color: ${({ theme }) => theme.color.HJ || '#0033cc'};
    }
  `,
};
