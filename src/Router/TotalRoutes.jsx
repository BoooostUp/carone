import TotalBusinessAbout from '../pages/Total/Business/TotalBusinessAbout';
import TotalBusinessProcess from '../pages/Total/Business/TotalBusinessProcess';
import TotalBusinessWaste from '../pages/Total/Business/TotalBusinessWaste';
import TotalInfoBusinessPartner from '../pages/Total/Info/TotalInfoBusinessPartner';
import TotalInfoCeo from '../pages/Total/Info/TotalInfoCeo';
import TotalInfoHistory from '../pages/Total/Info/TotalInfoHistory';
import TotalInfoLocation from '../pages/Total/Info/TotalInfoLocation';
import TotalFacilities from '../pages/Total/TotalFacilities';
import TotalLicenses from '../pages/Total/TotalLicenses';
import TotalMain from '../pages/Total/TotalMain';

export const TotalRoutes = [
  {
    path: '/total',
    element: <TotalMain />,
  },

  {
    path: '/total/info',
    children: [
      {
        path: '/total/info',
        element: <TotalInfoCeo />,
      },
      {
        path: '/total/info/history',
        element: <TotalInfoHistory />,
      },
      {
        path: '/total/info/location',
        element: <TotalInfoLocation />,
      },
      {
        path: '/total/info/business-partner',
        element: <TotalInfoBusinessPartner />,
      },
    ],
  },

  {
    path: '/total/business',
    children: [
      {
        path: '/total/business',
        element: <TotalBusinessAbout />,
      },
      {
        path: '/total/business/waste',
        element: <TotalBusinessWaste />,
      },
      {
        path: '/total/business/process',
        element: <TotalBusinessProcess />,
      },
    ],
  },

  {
    path: '/total/facilities',
    element: <TotalFacilities />,
  },
  {
    path: '/total/licenses',
    element: <TotalLicenses />,
  },
];
