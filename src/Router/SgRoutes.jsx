import SgBusinessAbout from '../pages/Sg/Business/SgBusinessAbout';
import SgBusinessFlowchart from '../pages/Sg/Business/SgBusinessFlowchart';
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
    path: '',
    element: <SgMain />,
  },

  {
    path: 'info',
    children: [
      {
        path: '',
        element: <SgInfoCeo />,
      },
      {
        path: 'history',
        element: <SgInfoHistory />,
      },
      {
        path: 'location',
        element: <SgInfoLocation />,
      },
      {
        path: 'business-partner',
        element: <SgInfoBusinessPartner />,
      },
    ],
  },

  {
    path: 'business',
    children: [
      {
        path: '',
        element: <SgBusinessAbout />,
      },
      {
        path: 'waste',
        element: <SgBusinessWaste />,
      },
      {
        path: 'flowchart',
        element: <SgBusinessFlowchart />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <SgFacilities />,
  },
  {
    path: 'licenses',
    element: <SgLicenses />,
  },
];
