import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const Total2BusinessLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <div>
      <CategoryBar
        company="TOTAL2"
        category={LNB_CONTENTS.TOTAL}
        selectedButton={selectedCategory}
        currentPage="business"
      />
      <S.Layout>
        <div className="outletWrapper">
          <Outlet />
        </div>
      </S.Layout>
    </div>
  );
};

const S = {
  Layout: styled.div`
    display: flex;

    .outletWrapper {
      display: flex;
      align-items: center;

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
export default Total2BusinessLayout;
