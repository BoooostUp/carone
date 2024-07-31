import EsBusinessAbout from '../pages/Es/Business/EsBusinessAbout';
import EsBusinessLayout from '../pages/Es/Business/EsBusinessLayout';
import EsBusinessProcess from '../pages/Es/Business/EsBusinessProcess';
import EsBusinessWaste from '../pages/Es/Business/EsBusinessWaste';
import EsFacilities from '../pages/Es/EsFacilities';
import EsLicenses from '../pages/Es/EsLicenses/EsLicenses';
import EsLicensesLayout from '../pages/Es/EsLicenses/EsLicensesLayout';
import EsPatent from '../pages/Es/EsLicenses/EsPatent';
import EsMain from '../pages/Es/EsMain';
import EsInfoBusinessPartner from '../pages/Es/Info/EsInfoBusinessPartner';
import EsInfoCeo from '../pages/Es/Info/EsInfoCeo';
import EsInfoHistory from '../pages/Es/Info/EsInfoHistory';
import EsInfoLayout from '../pages/Es/Info/EsInfoLayout';
import EsInfoLocation from '../pages/Es/Info/EsInfoLocation';

export const EsRoutes = [
  {
    path: '',
    element: <EsMain />,
  },

  {
    element: <EsInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <EsInfoCeo />,
      },
      {
        path: 'info/history',
        element: <EsInfoHistory />,
      },
      {
        path: 'info/location',
        element: <EsInfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <EsInfoBusinessPartner />,
      },
    ],
  },

  {
    element: <EsBusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <EsBusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <EsBusinessWaste />,
      },
      {
        path: 'business/process',
        element: <EsBusinessProcess />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <EsFacilities />,
  },
  {
    element: <EsLicensesLayout />,
    children: [
      {
        path: 'licenses/certification',
        element: <EsLicenses />,
      },
      {
        path: 'licenses/patent',
        element: <EsPatent />,
      },
    ],
  },
];
