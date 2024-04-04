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
    path: '/carone',
    element: <CaroneMain />,
  },

  {
    path: '/carone/info',
    children: [
      {
        path: '/carone/info',
        element: <CaroneInfoCeo />,
      },
      {
        path: '/carone/info/history',
        element: <CaroneInfoHistory />,
      },
      {
        path: '/carone/info/location',
        element: <CaroneInfoLocation />,
      },
      {
        path: '/carone/info/business-partner',
        element: <CaroneInfoBusinessPartner />,
      },
    ],
  },

  {
    path: '/carone/business',
    children: [
      {
        path: '/carone/business',
        element: <CaroneBusinessAbout />,
      },
      {
        path: '/carone/business/waste',
        element: <CaroneBusinessWaste />,
      },
      {
        path: '/carone/business/process',
        element: <CaroneBusinessProcess />,
      },
    ],
  },

  {
    path: '/carone/facilities',
    element: <CaroneFacilities />,
  },
  {
    path: '/carone/licenses',
    element: <CaroneLicenses />,
  },
];
