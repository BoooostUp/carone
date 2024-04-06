import SiBusinessCleaning from '../pages/Si/Business/SiBusinessCleaning';
import SiBusinessDredging from '../pages/Si/Business/SiBusinessDredging';
import SiBusinessLayout from '../pages/Si/Business/SiBusinessLayout';
import SiBusinessPipe from '../pages/Si/Business/SiBusinessPipe';
import SiInfoBusinessPartner from '../pages/Si/Info/SiInfoBusinessPartner';
import SiInfoCeo from '../pages/Si/Info/SiInfoCeo';
import SiInfoHistory from '../pages/Si/Info/SiInfoHistory';
import SiInfoLayout from '../pages/Si/Info/SiInfoLayout';
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
    element: <SiInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <SiInfoCeo />,
      },
      {
        path: 'info/history',
        element: <SiInfoHistory />,
      },
      {
        path: 'info/location',
        element: <SiInfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <SiInfoBusinessPartner />,
      },
    ],
  },

  {
    element: <SiBusinessLayout />,
    children: [
      {
        path: 'business/cleaning',
        element: <SiBusinessCleaning />,
      },
      {
        path: 'business/dredging',
        element: <SiBusinessDredging />,
      },
      {
        path: 'business/pipe',
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
