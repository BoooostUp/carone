import SiBusinessCleaning from '../pages/SI/Business/SiBusinessCleaning';
import SiBusinessDredging from '../pages/SI/Business/SiBusinessDredging';
import SiBusinessPipe from '../pages/SI/Business/SiBusinessPipe';
import SiInfoBusinessPartner from '../pages/SI/Info/SiInfoBusinessPartner';
import SiInfoCeo from '../pages/SI/Info/SiInfoCeo';
import SiInfoHistory from '../pages/SI/Info/SiInfoHistory';
import SiInfoLocation from '../pages/SI/Info/SiInfoLocation';
import SiFacilities from '../pages/SI/SiFacilities';
import SiLicenses from '../pages/SI/SiLicenses';
import SiMain from '../pages/SI/SiMain';

export const SiRoutes = [
  {
    path: '/si',
    element: <SiMain />,
  },

  {
    path: '/si/info',
    children: [
      {
        path: '/si/info',
        element: <SiInfoCeo />,
      },
      {
        path: '/si/info/history',
        element: <SiInfoHistory />,
      },
      {
        path: '/si/info/location',
        element: <SiInfoLocation />,
      },
      {
        path: '/si/info/business-partner',
        element: <SiInfoBusinessPartner />,
      },
    ],
  },

  {
    path: '/si/business',
    children: [
      {
        path: '/si/business',
        element: <SiBusinessCleaning />,
      },
      {
        path: '/si/business/waste',
        element: <SiBusinessPipe />,
      },
      {
        path: '/si/business/process',
        element: <SiBusinessDredging />,
      },
    ],
  },

  {
    path: '/si/facilities',
    element: <SiFacilities />,
  },
  {
    path: '/si/licenses',
    element: <SiLicenses />,
  },
];
