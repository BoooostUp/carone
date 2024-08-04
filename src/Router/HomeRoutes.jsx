import HomeBusiness from '../pages/Home/HomeBusiness';
import HomeCeo from '../pages/Home/HomeCeo';
import HomeLocation from '../pages/Home/HomeLocation';
import HomeMain from '../pages/Home/HomeMain';
import HomeRecruitApply from '../pages/Home/HomeRecruit/HomeRecruitApply';
import HomeRecruitLayout from '../pages/Home/HomeRecruit/HomeRecruitLayout';
import HomeRecruitProcess from '../pages/Home/HomeRecruit/HomeRecruitProcess';

export const HomeRoutes = [
  {
    path: '',
    element: <HomeMain />,
  },
  {
    path: 'ceo',
    element: <HomeCeo />,
  },
  {
    path: 'business',
    element: <HomeBusiness />,
  },
  {
    path: 'location',
    element: <HomeLocation />,
  },
  {
    element: <HomeRecruitLayout />,
    children: [
      {
        path: 'recruit/process',
        element: <HomeRecruitProcess />,
      },
      {
        path: 'recruit/apply',
        element: <HomeRecruitApply />,
      },
    ],
  },
];
