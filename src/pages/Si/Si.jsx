import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';

const Si = () => {
  return (
    <div>
      <Gnb company="SI" />
      <Outlet />
      <Bnb company="SI" />
      <Footer company="SI" />
    </div>
  );
};

export default Si;
