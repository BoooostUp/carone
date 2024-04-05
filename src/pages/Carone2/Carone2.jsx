import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';

const Carone2 = () => {
  return (
    <div>
      <Gnb company="CARONE" />
      <Outlet />
      <Bnb company="CARONE" />
      <Footer company="CARONE" />
    </div>
  );
};

export default Carone2;
