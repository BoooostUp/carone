import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';

const Total = () => {
  return (
    <div>
      <Gnb company="TOTAL" />
      <Outlet />
      <Bnb company="TOTAL" />
      <Footer company="TOTAL" />
    </div>
  );
};

export default Total;
