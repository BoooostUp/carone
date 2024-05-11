import Carone2BusinessAbout from '../pages/Carone2/Business/Carone2BusinessAbout';
import Carone2BusinessLayout from '../pages/Carone2/Business/Carone2BusinessLayout';
import Carone2BusinessProcess from '../pages/Carone2/Business/Carone2BusinessProcess';
import Carone2BusinessWaste from '../pages/Carone2/Business/Carone2BusinessWaste';
import Carone2Facilities from '../pages/Carone2/Carone2Facilities';
import Carone2Licenses from '../pages/Carone2/Carone2Licenses/Carone2Licenses';
import Carone2LicensesLayout from '../pages/Carone2/Carone2Licenses/Carone2LicensesLayout';
import Carone2Patent from '../pages/Carone2/Carone2Licenses/Carone2Patent';
import Carone2Main from '../pages/Carone2/Carone2Main';
import Carone2InfoBusinessPartner from '../pages/Carone2/Info/Carone2InfoBusinessPartner';
import Carone2InfoCeo from '../pages/Carone2/Info/Carone2InfoCeo';
import Carone2InfoHistory from '../pages/Carone2/Info/Carone2InfoHistory';
import Carone2InfoLayout from '../pages/Carone2/Info/Carone2InfoLayout';
import Carone2InfoLocation from '../pages/Carone2/Info/Carone2InfoLocation';

export const Carone2Routes = [
  {
    path: '',
    element: <Carone2Main />,
  },

  {
    element: <Carone2InfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <Carone2InfoCeo />,
      },
      {
        path: 'info/history',
        element: <Carone2InfoHistory />,
      },
      {
        path: 'info/location',
        element: <Carone2InfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <Carone2InfoBusinessPartner />,
      },
    ],
  },

  {
    element: <Carone2BusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <Carone2BusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <Carone2BusinessWaste />,
      },
      {
        path: 'business/process',
        element: <Carone2BusinessProcess />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <Carone2Facilities />,
  },
  {
    element: <Carone2LicensesLayout />,
    children: [
      {
        path: 'licenses/certification',
        element: <Carone2Licenses />,
      },
      {
        path: 'licenses/patent',
        element: <Carone2Patent />,
      },
    ],
  },
];
