import NaeilBusinessAbout from '../pages/Naeil/Business/NaeilBusinessAbout';
import NaeilBusinessLayout from '../pages/Naeil/Business/NaeilBusinessLayout';
import NaeilBusinessWaste from '../pages/Naeil/Business/NaeilBusinessWaste';
import NaeilInfoCeo from '../pages/Naeil/Info/NaeilInfoCeo';
import NaeilInfoHistory from '../pages/Naeil/Info/NaeilInfoHistory';
import NaeilInfoLayout from '../pages/Naeil/Info/NaeilInfoLayout';
import NaeilInfoLocation from '../pages/Naeil/Info/NaeilInfoLocation';
import NaeilLicenses from '../pages/Naeil/Licenses/NaeilLicenses';
import NaeilLicensesLayout from '../pages/Naeil/Licenses/NaeilLicensesLayout';
import NaeilFacilities from '../pages/Naeil/NaeilFacilities';
import NaeilMain from '../pages/Naeil/NaeilMain';

export const NaeilRoutes = [
  {
    path: '',
    element: <NaeilMain />,
  },

  {
    element: <NaeilInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <NaeilInfoCeo />,
      },
      {
        path: 'info/history',
        element: <NaeilInfoHistory />,
      },
      {
        path: 'info/location',
        element: <NaeilInfoLocation />,
      },
    ],
  },

  {
    element: <NaeilBusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <NaeilBusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <NaeilBusinessWaste />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <NaeilFacilities />,
  },
  {
    element: <NaeilLicensesLayout />,
    children: [
      {
        path: 'licenses/certification',
        element: <NaeilLicenses />,
      },
    ],
  },
];
