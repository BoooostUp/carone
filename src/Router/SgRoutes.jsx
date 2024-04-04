import SgBusinessAbout from '../pages/Sg/Business/SgBusinessAbout';
import SgBusinessProcess from '../pages/Sg/Business/SgBusinessProcess';
import SgBusinessWaste from '../pages/Sg/Business/SgBusinessWaste';
import SgInfoBusinessPartner from '../pages/Sg/Info/SgInfoBusinessPartner';
import SgInfoCeo from '../pages/Sg/Info/SgInfoCeo';
import SgInfoHistory from '../pages/Sg/Info/SgInfoHistory';
import SgInfoLocation from '../pages/Sg/Info/SgInfoLocation';
import SgFacilities from '../pages/Sg/SgFacilities';
import SgLicenses from '../pages/Sg/SgLicenses';
import SgMain from '../pages/Sg/SgMain';

export const SgRoutes = [
  {
    path: '/sg',
    element: <SgMain />,
  },

  {
    path: '/sg/info',
    children: [
      {
        path: '/sg/info',
        element: <SgInfoCeo />,
      },
      {
        path: '/sg/info/history',
        element: <SgInfoHistory />,
      },
      {
        path: '/sg/info/location',
        element: <SgInfoLocation />,
      },
      {
        path: '/sg/info/business-partner',
        element: <SgInfoBusinessPartner />,
      },
    ],
  },

  {
    path: '/sg/business',
    children: [
      {
        path: '/sg/business',
        element: <SgBusinessAbout />,
      },
      {
        path: '/sg/business/waste',
        element: <SgBusinessWaste />,
      },
      {
        path: '/sg/business/process',
        element: <SgBusinessProcess />,
      },
    ],
  },

  {
    path: '/sg/facilities',
    element: <SgFacilities />,
  },
  {
    path: '/sg/licenses',
    element: <SgLicenses />,
  },
];
