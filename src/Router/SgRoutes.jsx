import SgBusinessAbout from '../pages/Sg/Business/SgBusinessAbout';
import SgBusinessFlowchart from '../pages/Sg/Business/SgBusinessFlowchart';
import SgBusinessLayout from '../pages/Sg/Business/SgBusinessLayout';
import SgBusinessWaste from '../pages/Sg/Business/SgBusinessWaste';
import SgInfoBusinessPartner from '../pages/Sg/Info/SgInfoBusinessPartner';
import SgInfoCeo from '../pages/Sg/Info/SgInfoCeo';
import SgInfoHistory from '../pages/Sg/Info/SgInfoHistory';
import SgInfoLayout from '../pages/Sg/Info/SgInfoLayout';
import SgInfoLocation from '../pages/Sg/Info/SgInfoLocation';
import SgFacilities from '../pages/Sg/SgFacilities';
import SgLicenses from '../pages/Sg/SgLicenses/SgLicenses';
import SgLicensesLayout from '../pages/Sg/SgLicenses/SgLicensesLayout';
import SgMain from '../pages/Sg/SgMain';

export const SgRoutes = [
  {
    path: '',
    element: <SgMain />,
  },

  {
    element: <SgInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <SgInfoCeo />,
      },
      {
        path: 'info/history',
        element: <SgInfoHistory />,
      },
      {
        path: 'info/location',
        element: <SgInfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <SgInfoBusinessPartner />,
      },
    ],
  },

  {
    element: <SgBusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <SgBusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <SgBusinessWaste />,
      },
      {
        path: 'business/flowchart',
        element: <SgBusinessFlowchart />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <SgFacilities />,
  },
  {
    element: <SgLicensesLayout />,
    children: [
      {
        path: 'licenses/certification',
        element: <SgLicenses />,
      },
    ],
  },
];
