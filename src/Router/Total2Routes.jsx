import Total2BusinessAbout from '../pages/Total2/Business/Total2BusinessAbout';
import Total2BusinessProcess from '../pages/Total2/Business/Total2BusinessProcess';
import Total2BusinessWaste from '../pages/Total2/Business/Total2BusinessWaste';
import Total2InfoBusinessPartner from '../pages/Total2/Info/Total2InfoBusinessPartner';
import Total2InfoCeo from '../pages/Total2/Info/Total2InfoCeo';
import Total2InfoHistory from '../pages/Total2/Info/Total2InfoHistory';
import Total2InfoLocation from '../pages/Total2/Info/Total2InfoLocation';
import Total2Facilities from '../pages/Total2/Total2Facilities';
import Total2Licenses from '../pages/Total2/Total2Licenses';
import Total2Main from '../pages/Total2/Total2Main';

export const Total2Routes = [
  {
    path: '',
    element: <Total2Main />,
  },

  {
    path: 'info',
    children: [
      {
        path: '',
        element: <Total2InfoCeo />,
      },
      {
        path: 'history',
        element: <Total2InfoHistory />,
      },
      {
        path: 'location',
        element: <Total2InfoLocation />,
      },
      {
        path: 'business-partner',
        element: <Total2InfoBusinessPartner />,
      },
    ],
  },

  {
    path: 'business',
    children: [
      {
        path: '',
        element: <Total2BusinessAbout />,
      },
      {
        path: 'waste',
        element: <Total2BusinessWaste />,
      },
      {
        path: 'process',
        element: <Total2BusinessProcess />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <Total2Facilities />,
  },
  {
    path: 'licenses',
    element: <Total2Licenses />,
  },
];
