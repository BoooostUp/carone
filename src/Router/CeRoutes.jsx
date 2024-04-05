import CeBusinessAbout from '../pages/Ce/Business/CeBusinessAbout';
import CeBusinessRegistration from '../pages/Ce/Business/CeBusinessRegistration';
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
    path: '',
    element: <CeMain />,
  },

  {
    path: 'info',
    children: [
      {
        path: '',
        element: <CeInfoCeo />,
      },
      {
        path: 'history',
        element: <CeInfoHistory />,
      },
      {
        path: 'location',
        element: <CeInfoLocation />,
      },
      {
        path: 'business-partner',
        element: <CeInfoBusinessPartner />,
      },
    ],
  },

  {
    path: 'business',
    children: [
      {
        path: '',
        element: <CeBusinessAbout />,
      },
      {
        path: 'waste',
        element: <CeBusinessWaste />,
      },
      {
        path: 'registration',
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
