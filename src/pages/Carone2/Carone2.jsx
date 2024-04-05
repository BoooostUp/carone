import { Outlet } from 'react-router';
import Gnb from '../../components/Header/Gnb';

const Carone2 = () => {
  return (
    <div>
      <Gnb company="CARONE" />
      <Outlet />
    </div>
  );
};

export default Carone2;
