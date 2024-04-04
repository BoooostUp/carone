import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';

const Home = () => {
  return (
    <div>
      <Gnb company="HOME" />
      <Outlet />
      <Footer company="HOME" />
    </div>
  );
};

export default Home;
