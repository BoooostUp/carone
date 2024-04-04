import { Outlet } from 'react-router';
import Gnb from '../../components/Header/Gnb';

const Sg = () => {
  return (
    <div>
      <Gnb company="SG" />
      <Outlet />
    </div>
  );
};

export default Sg;
