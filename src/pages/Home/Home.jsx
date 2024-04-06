import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import SubCategoryBar from '../../components/Main/SubCategoryBar';

const Home = () => {
  return (
    <div>
      <Gnb company="HOME" />
      <Outlet />
      <SubCategoryBar company="CARONE" />
      <Bnb company="HOME" />
      <Footer company="HOME" />
    </div>
  );
};

export default Home;
