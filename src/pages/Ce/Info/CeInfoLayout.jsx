import { useLocation, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const CeInfoLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
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

const HEADER_HEIGHT = 80;

const S = {
  Layout: styled.main`
    width: 100%;
    box-sizing: border-box;
    padding-top: 2rem;
    background: linear-gradient(180deg, #f5f7f9 0%, #ffffff 35%);

    .outletWrapper {
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;
      padding: 5.5rem 2.25rem 6.5rem;
      min-height: calc(100vh - ${HEADER_HEIGHT}px);
      display: block;
      border: 1px solid ${({ theme }) => `${theme.color.lightGray}80`};
      border-radius: 22px;
      background-color: #ffffff;
      box-shadow: 0 18px 44px rgba(0, 0, 0, 0.06);

      @media (max-width: 767px) {
        padding: 4.5rem 1.75rem 5.5rem;
        min-height: calc(100vh - ${HEADER_HEIGHT}px);
      }
    }
  `,
};
