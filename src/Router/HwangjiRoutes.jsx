import HjBusinessAbout from '../pages/Hwangji/Business/HjBusinessAbout';
import HjBusinessFlowchart from '../pages/Hwangji/Business/HjBusinessFlowchart';
import HjBusinessLayout from '../pages/Hwangji/Business/HjBusinessLayout';
import HjBusinessWaste from '../pages/Hwangji/Business/HjBusinessWaste';
import HjFacilities from '../pages/Hwangji/HjFacilities';
import HjMain from '../pages/Hwangji/HjMain';
import HjInfoBusinessPartner from '../pages/Hwangji/Info/HjInfoBusinessPartner';
import HjInfoCeo from '../pages/Hwangji/Info/HjInfoCeo';
import HjInfoHistory from '../pages/Hwangji/Info/HjInfoHistory';
import HjInfoLayout from '../pages/Hwangji/Info/HjInfoLayout';
import HjInfoLocation from '../pages/Hwangji/Info/HjInfoLocation';
import HjLicenses from '../pages/Hwangji/Licenses/HjLicenses';
import HjLicensesLayout from '../pages/Hwangji/Licenses/HjLicensesLayout';

export const HwangjiRoutes = [
  {
    path: '',
    element: <HjMain />,
  },

  {
    element: <HjInfoLayout />,
    children: [
      {
        path: 'info/ceo',
        element: <HjInfoCeo />,
      },
      {
        path: 'info/history',
        element: <HjInfoHistory />,
      },
      {
        path: 'info/location',
        element: <HjInfoLocation />,
      },
      {
        path: 'info/business-partner',
        element: <HjInfoBusinessPartner />,
      },
    ],
  },

  {
    element: <HjBusinessLayout />,
    children: [
      {
        path: 'business/about',
        element: <HjBusinessAbout />,
      },
      {
        path: 'business/waste',
        element: <HjBusinessWaste />,
      },
      {
        path: 'business/process',
        element: <HjBusinessFlowchart />,
      },
    ],
  },

  {
    path: 'facilities',
    element: <HjFacilities />,
  },
  {
    element: <HjLicensesLayout />,
    children: [
      {
        path: 'licenses/certification',
        element: <HjLicenses />,
      },
    ],
  },
];
