import { Outlet } from 'react-router';
import Gnb from '../../components/Header/Gnb';

const Si = () => {
  return (
    <div>
      <Gnb company="SI" />
      <Outlet />
    </div>
  );
};

export default Si;
