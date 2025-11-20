// 그대로 사용
import { useLocation, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const CeInfoLayout = () => {
  const location = useLocation();
  const parts = location.pathname.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <>
      <CategoryBar
        company="CE"
        category={LNB_CONTENTS.INFO}
        selectedButton={selectedCategory}
        currentPage="info"
      />
      <S.Layout>
        <div className="outletWrapper">
          <Outlet />
        </div>
      </S.Layout>
    </>
  );
};

export default CeInfoLayout;

const HEADER_HEIGHT = 72; // CategoryBar 실제 높이에 맞게 조정 (예: 64~88)

const S = {
  Layout: styled.main`
    /* 화면 전체 폭으로 깔고, 상단바 높이만큼 여백 주기 */
    width: 100%;
    box-sizing: border-box;

    /* CategoryBar가 fixed/sticky면 겹치지 않게 패딩 */
    padding-top: ${HEADER_HEIGHT}px;

    /* 가운데 정렬은 wrapper에 맡기고, 여기선 굳이 flex 안 씀 */
    /* display: flex;  <-- 제거 */

    .outletWrapper {
      /* 가운데 정렬 & 양옆 패딩 */
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;
      padding: 8rem 2rem; /* 좌우 패딩 추가해서 ‘밀린’ 느낌 방지 */

      /* 세로 길이 확보 (상단바 제외 가시 높이) */
      min-height: calc(100vh - ${HEADER_HEIGHT}px);

      /* 내용은 블록 흐름으로 자연스럽게 */
      display: block; /* ✅ flex 제거 */

      @media (max-width: 767px) {
        padding: 5rem 1.5rem;
        min-height: calc(100vh - ${HEADER_HEIGHT}px);
      }
    }
  `,
};
