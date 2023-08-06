import {
  HomeIcon,
  Cog6ToothIcon,
  HeartIcon,
  VideoCameraIcon,
  DocumentIcon,
  CameraIcon,
  UserIcon,
  SunIcon,
  UsersIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
export const links = [
  {
    label: "Home",
    icon: <HomeIcon />,
    expanded: false,
    submenu: [],
  },
  {
    label: "Settings",
    icon: <Cog6ToothIcon />,
    expanded: false,
    submenu: [
      {
        title: "Profile",
        icon: <UserIcon />,
      },
      {
        title: "Theme",
        icon: <SunIcon />,
      },
      {
        title: "Payment",
        icon: <CurrencyDollarIcon />,
      },
      {
        title: "Followers",
        icon: <UsersIcon />,
      },
    ],
  },
  {
    label: "Reactions",
    icon: <HeartIcon />,
    expanded: false,
    submenu: [
      {
        title: "Videos",
        icon: <VideoCameraIcon />,
      },
      {
        title: "Posts",
        icon: <DocumentIcon />,
      },
      {
        title: "Images",
        icon: <CameraIcon />,
      },
    ],
  },
];
