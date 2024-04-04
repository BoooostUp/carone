import CeBusinessAbout from '../pages/Ce/Business/CeBusinessAbout';
import CeBusinessProcess from '../pages/Ce/Business/CeBusinessProcess';
import CeBusinessWaste from '../pages/Ce/Business/CeBusinessWaste';
import CeFacilities from '../pages/Ce/CeFacilities';
import CeLicenses from '../pages/Ce/CeLicenses';
import CeMain from '../pages/Ce/CeMain';
import CeInfoBusinessPartner from '../pages/Ce/Info/CeInfoBusinessPartner';
import CeInfoCeo from '../pages/Ce/Info/CeInfoCeo';
import CeInfoHistory from '../pages/Ce/Info/CeInfoHistory';
import CeInfoLocation from '../pages/Ce/Info/CeInfoLocation';

export const CeRoutes = [
  {
    path: '/ce',
    element: <CeMain />,
  },

  {
    path: '/ce/info',
    children: [
      {
        path: '/ce/info',
        element: <CeInfoCeo />,
      },
      {
        path: '/ce/info/history',
        element: <CeInfoHistory />,
      },
      {
        path: '/ce/info/location',
        element: <CeInfoLocation />,
      },
      {
        path: '/ce/info/business-partner',
        element: <CeInfoBusinessPartner />,
      },
    ],
  },

  {
    path: '/ce/business',
    children: [
      {
        path: '/ce/business',
        element: <CeBusinessAbout />,
      },
      {
        path: '/ce/business/waste',
        element: <CeBusinessWaste />,
      },
      {
        path: '/ce/business/process',
        element: <CeBusinessProcess />,
      },
    ],
  },

  {
    path: '/ce/facilities',
    element: <CeFacilities />,
  },
  {
    path: '/ce/licenses',
    element: <CeLicenses />,
  },
];
