import CaroneBusinessAbout from '../pages/Carone/Business/CaroneBusinessAbout';
import CaroneBusinessLayout from '../pages/Carone/Business/CaroneBusinessLayout';
import CaroneBusinessProcess from '../pages/Carone/Business/CaroneBusinessProcess';
import CaroneBusinessWaste from '../pages/Carone/Business/CaroneBusinessWaste';
import CaroneFacilities from '../pages/Carone/CaroneFacilities';
import CaroneLicenses from '../pages/Carone/CaroneLicenses';
import CaroneMain from '../pages/Carone/CaroneMain';
import CaroneInfoBusinessPartner from '../pages/Carone/Info/CaroneInfoBusinessPartner';
import CaroneInfoCeo from '../pages/Carone/Info/CaroneInfoCeo';
import CaroneInfoHistory from '../pages/Carone/Info/CaroneInfoHistory';
import CaroneInfoLayout from '../pages/Carone/Info/CaroneInfoLayout';
import CaroneInfoLocation from '../pages/Carone/Info/CaroneInfoLocation';

export const CaroneRoutes = [
  {
    path: '',
    element: <CaroneMain />,
  },

  {
    element: <CaroneInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <CaroneInfoCeo />,
      },
      {
        path: 'info/history',
        element: <CaroneInfoHistory />,
      },
      {
        path: 'info/location',
        element: <CaroneInfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <CaroneInfoBusinessPartner />,
      },
    ],
  },

  {
    element: <CaroneBusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <CaroneBusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <CaroneBusinessWaste />,
      },
      {
        path: 'business/process',
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
