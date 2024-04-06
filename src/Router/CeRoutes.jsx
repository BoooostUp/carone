import CeBusinessAbout from '../pages/Ce/Business/CeBusinessAbout';
import CeBusinessLayout from '../pages/Ce/Business/CeBusinessLayout';
import CeBusinessRegistration from '../pages/Ce/Business/CeBusinessRegistration';
import CeBusinessWaste from '../pages/Ce/Business/CeBusinessWaste';
import CeFacilities from '../pages/Ce/CeFacilities';
import CeLicenses from '../pages/Ce/CeLicenses';
import CeMain from '../pages/Ce/CeMain';
import CeInfoBusinessPartner from '../pages/Ce/Info/CeInfoBusinessPartner';
import CeInfoCeo from '../pages/Ce/Info/CeInfoCeo';
import CeInfoHistory from '../pages/Ce/Info/CeInfoHistory';
import CeInfoLayout from '../pages/Ce/Info/CeInfoLayout';
import CeInfoLocation from '../pages/Ce/Info/CeInfoLocation';

export const CeRoutes = [
  {
    path: '',
    element: <CeMain />,
  },

  {
    element: <CeInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <CeInfoCeo />,
      },
      {
        path: 'info/history',
        element: <CeInfoHistory />,
      },
      {
        path: 'info/location',
        element: <CeInfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <CeInfoBusinessPartner />,
      },
    ],
  },

  {
    element: <CeBusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <CeBusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <CeBusinessWaste />,
      },
      {
        path: 'business/registration',
        element: <CeBusinessRegistration />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <CeFacilities />,
  },
  {
    path: 'licenses',
    element: <CeLicenses />,
  },
];
