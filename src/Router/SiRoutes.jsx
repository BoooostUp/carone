import SiBusinessCleaning from '../pages/Si/Business/SiBusinessCleaning';
import SiBusinessDredging from '../pages/Si/Business/SiBusinessDredging';
import SiBusinessPipe from '../pages/Si/Business/SiBusinessPipe';
import SiInfoBusinessPartner from '../pages/Si/Info/SiInfoBusinessPartner';
import SiInfoCeo from '../pages/Si/Info/SiInfoCeo';
import SiInfoHistory from '../pages/Si/Info/SiInfoHistory';
import SiInfoLocation from '../pages/Si/Info/SiInfoLocation';
import SiFacilities from '../pages/Si/SiFacilities';
import SiLicenses from '../pages/Si/SiLicenses';
import SiMain from '../pages/Si/SiMain';

export const SiRoutes = [
  {
    path: '',
    element: <SiMain />,
  },

  {
    path: 'info',
    children: [
      {
        path: '',
        element: <SiInfoCeo />,
      },
      {
        path: 'history',
        element: <SiInfoHistory />,
      },
      {
        path: 'location',
        element: <SiInfoLocation />,
      },
      {
        path: 'business-partner',
        element: <SiInfoBusinessPartner />,
      },
    ],
  },

  {
    path: 'business',
    children: [
      {
        path: '',
        element: <SiBusinessCleaning />,
      },
      {
        path: 'dredging',
        element: <SiBusinessDredging />,
      },
      {
        path: 'pipe',
        element: <SiBusinessPipe />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <SiFacilities />,
  },
  {
    path: 'licenses',
    element: <SiLicenses />,
  },
];
