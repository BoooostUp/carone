import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const CaroneBusinessLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <div>
      <CategoryBar
        company="CARONE"
        category={LNB_CONTENTS.CARONE}
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
    justify-content: center;

    .outletWrapper {
      margin: 0 auto;
      max-width: 70rem;
      padding-top: 8rem;
      padding-bottom: 8rem;

      @media (max-width: 767px) {
        padding: 5rem 3rem;
      }
    }
  `,
};

export default CaroneBusinessLayout;
