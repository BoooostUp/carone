import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CategoryBar from '../../../components/Main/CategoryBar';
import { LNB_CONTENTS } from '../../../constants/LNB_CONTENTS';

const CaroneLicensesLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const parts = currentPath.split('/');
  const selectedCategory = parts[parts.length - 1];
  return (
    <>
      <CategoryBar
        company="CARONE"
        category={LNB_CONTENTS.License}
        selectedButton={selectedCategory}
        currentPage="licenses"
      />
      <S.Layout>
        <div className="outletWrapper">
          <Outlet />
        </div>
      </S.Layout>
    </>
  );
};

export default CaroneLicensesLayout;

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
