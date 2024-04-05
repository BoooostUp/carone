import { Outlet } from 'react-router';
import Gnb from '../../components/Header/Gnb';

const Total = () => {
  return (
    <div>
      <Gnb company="TOTAL" />
      <Outlet />
    </div>
  );
};

export default Total;
