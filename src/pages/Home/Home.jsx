import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';

const Home = () => {
  return (
    <div>
      <Gnb company="HOME" />
      <Outlet />
      <Bnb company="HOME" />
      <Footer company="HOME" />
    </div>
  );
};

export default Home;
