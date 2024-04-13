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

const S = {
  Layout: styled.div`
    display: flex;

    .outletWrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      max-width: 70rem;
      min-height: 40rem;
      padding-top: 8rem;
      padding-bottom: 8rem;

      @media (max-width: 767px) {
        padding: 5rem 3rem;
        min-height: 30rem;
      }
    }
  `,
};
