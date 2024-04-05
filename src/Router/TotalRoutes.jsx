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
    path: '',
    element: <TotalMain />,
  },

  {
    path: 'info',
    children: [
      {
        path: '',
        element: <TotalInfoCeo />,
      },
      {
        path: 'history',
        element: <TotalInfoHistory />,
      },
      {
        path: 'location',
        element: <TotalInfoLocation />,
      },
      {
        path: 'business-partner',
        element: <TotalInfoBusinessPartner />,
      },
    ],
  },

  {
    path: 'business',
    children: [
      {
        path: '',
        element: <TotalBusinessAbout />,
      },
      {
        path: 'waste',
        element: <TotalBusinessWaste />,
      },
      {
        path: 'process',
        element: <TotalBusinessProcess />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <TotalFacilities />,
  },
  {
    path: 'licenses',
    element: <TotalLicenses />,
  },
];
