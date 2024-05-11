import TotalBusinessAbout from '../pages/Total/Business/TotalBusinessAbout';
import TotalBusinessLayout from '../pages/Total/Business/TotalBusinessLayout';
import TotalBusinessProcess from '../pages/Total/Business/TotalBusinessProcess';
import TotalBusinessWaste from '../pages/Total/Business/TotalBusinessWaste';
import TotalInfoBusinessPartner from '../pages/Total/Info/TotalInfoBusinessPartner';
import TotalInfoCeo from '../pages/Total/Info/TotalInfoCeo';
import TotalInfoHistory from '../pages/Total/Info/TotalInfoHistory';
import TotalInfoLayout from '../pages/Total/Info/TotalInfoLayout';
import TotalInfoLocation from '../pages/Total/Info/TotalInfoLocation';
import TotalFacilities from '../pages/Total/TotalFacilities';
import TotalLicenses from '../pages/Total/TotalLicenses/TotalLicenses';
import TotalLicensesLayout from '../pages/Total/TotalLicenses/TotalLicensesLayout';
import TotalPatent from '../pages/Total/TotalLicenses/TotalPatent';
import TotalMain from '../pages/Total/TotalMain';

export const TotalRoutes = [
  {
    path: '',
    element: <TotalMain />,
  },

  {
    element: <TotalInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <TotalInfoCeo />,
      },
      {
        path: 'info/history',
        element: <TotalInfoHistory />,
      },
      {
        path: 'info/location',
        element: <TotalInfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <TotalInfoBusinessPartner />,
      },
    ],
  },

  {
    element: <TotalBusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <TotalBusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <TotalBusinessWaste />,
      },
      {
        path: 'business/process',
        element: <TotalBusinessProcess />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <TotalFacilities />,
  },
  {
    element: <TotalLicensesLayout />,
    children: [
      {
        path: 'licenses/certification',
        element: <TotalLicenses />,
      },
      {
        path: 'licenses/patent',
        element: <TotalPatent />,
      },
    ],
  },
];
