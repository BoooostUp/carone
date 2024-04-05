import { Outlet } from 'react-router';
import Gnb from '../../components/Header/Gnb';

const Ce = () => {
  return (
    <div>
      <Gnb company="CE" />
      <Outlet />
    </div>
  );
};

export default Ce;
