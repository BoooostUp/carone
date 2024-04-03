import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div>
      <div>헤더</div>
      <Outlet />
    </div>
  );
};

export default Home;
