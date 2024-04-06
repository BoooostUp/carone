import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';

const Ce = () => {
  return (
    <div>
      <Gnb company="CE" />
      <Outlet />
      <Bnb company="CE" />
      <Footer company="CE" />
    </div>
  );
};

export default Ce;
