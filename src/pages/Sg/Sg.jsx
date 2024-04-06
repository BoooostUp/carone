import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';

const Sg = () => {
  return (
    <div>
      <Gnb company="SG" />
      <Outlet />
      <Bnb company="SG" />
      <Footer company="SG" />
    </div>
  );
};

export default Sg;
