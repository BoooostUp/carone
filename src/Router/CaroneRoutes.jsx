import CaroneBusinessAbout from '../pages/Carone/Business/CaroneBusinessAbout';
import CaroneBusinessProcess from '../pages/Carone/Business/CaroneBusinessProcess';
import CaroneBusinessWaste from '../pages/Carone/Business/CaroneBusinessWaste';
import CaroneFacilities from '../pages/Carone/CaroneFacilities';
import CaroneLicenses from '../pages/Carone/CaroneLicenses';
import CaroneMain from '../pages/Carone/CaroneMain';
import CaroneInfoCeo from '../pages/Carone/Info/CareoneInfoCeo';
import CaroneInfoBusinessPartner from '../pages/Carone/Info/CaroneInfoBusinessPartner';
import CaroneInfoHistory from '../pages/Carone/Info/CaroneInfoHistory';
import CaroneInfoLocation from '../pages/Carone/Info/CaroneInfoLocation';

export const CaroneRoutes = [
  {
    path: '',
    element: <CaroneMain />,
  },

  {
    path: 'info',
    children: [
      {
        path: '',
        element: <CaroneInfoCeo />,
      },
      {
        path: 'history',
        element: <CaroneInfoHistory />,
      },
      {
        path: 'location',
        element: <CaroneInfoLocation />,
      },
      {
        path: 'business-partner',
        element: <CaroneInfoBusinessPartner />,
      },
    ],
  },

  {
    path: 'business',
    children: [
      {
        path: '',
        element: <CaroneBusinessAbout />,
      },
      {
        path: 'waste',
        element: <CaroneBusinessWaste />,
      },
      {
        path: 'process',
        element: <CaroneBusinessProcess />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <CaroneFacilities />,
  },
  {
    path: 'licenses',
    element: <CaroneLicenses />,
  },
];
