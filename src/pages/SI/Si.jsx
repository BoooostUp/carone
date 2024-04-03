import { Outlet } from 'react-router';

const Si = () => {
  return (
    <div>
      <div>헤더</div>
      <Outlet />
    </div>
  );
};

export default Si;
