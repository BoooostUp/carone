import Carone2BusinessAbout from '../pages/Carone2/Business/Carone2BusinessAbout';
import Carone2BusinessProcess from '../pages/Carone2/Business/Carone2BusinessProcess';
import Carone2BusinessWaste from '../pages/Carone2/Business/Carone2BusinessWaste';
import Carone2Facilities from '../pages/Carone2/Carone2Facilities';
import Carone2Licenses from '../pages/Carone2/Carone2Licenses';
import Carone2Main from '../pages/Carone2/Carone2Main';
import Carone2InfoBusinessPartner from '../pages/Carone2/Info/Carone2InfoBusinessPartner';
import Carone2InfoCeo from '../pages/Carone2/Info/Carone2InfoCeo';
import Carone2InfoHistory from '../pages/Carone2/Info/Carone2InfoHistory';
import Carone2InfoLocation from '../pages/Carone2/Info/Carone2InfoLocation';

export const Carone2Routes = [
  {
    path: '',
    element: <Carone2Main />,
  },

  {
    path: 'info',
    children: [
      {
        path: '',
        element: <Carone2InfoCeo />,
      },
      {
        path: 'history',
        element: <Carone2InfoHistory />,
      },
      {
        path: 'location',
        element: <Carone2InfoLocation />,
      },
      {
        path: 'business-partner',
        element: <Carone2InfoBusinessPartner />,
      },
    ],
  },

  {
    path: 'business',
    children: [
      {
        path: '',
        element: <Carone2BusinessAbout />,
      },
      {
        path: 'waste',
        element: <Carone2BusinessWaste />,
      },
      {
        path: 'process',
        element: <Carone2BusinessProcess />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <Carone2Facilities />,
  },
  {
    path: 'licenses',
    element: <Carone2Licenses />,
  },
];
