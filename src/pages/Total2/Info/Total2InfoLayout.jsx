import { useLocation, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const Total2InfoLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <>
      <CategoryBar
        company="TOTAL2"
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

export default Total2InfoLayout;

const S = {
  Layout: styled.div`
    display: flex;
    justify-content: center;
    .outletWrapper {
      margin: 0 auto;
      max-width: 70rem;
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
    @media (max-width: 767px) {
      padding: 0rem 3rem;
    }
  `,
};
