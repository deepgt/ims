
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import CallIcon from '@mui/icons-material/Call';
import AddLinkIcon from '@mui/icons-material/AddLink';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import MapIcon from '@mui/icons-material/Map';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WifiIcon from '@mui/icons-material/Wifi';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


 const SidebarData = [
            {
                title: 'Dashboard',
                path: '/user',
                icon: <AvTimerIcon />,
                subNav: [
                    {
                        title: 'Custom dashboard',
                        path: '/userr',
                        icon: <AvTimerIcon />,
                    },
                    {
                        title: 'Finance dashboard',
                        path: '/userr',
                        icon: <LocalAtmIcon />,
                    },
                    {
                        title: 'Reseller Customer',
                        path: './user',
                        icon: <AvTimerIcon />,
                    },
                    {
                        title: 'Isp Customer',
                        path: './user',
                        icon: <AvTimerIcon />,
                    }
                ]
            },
            {
                title: 'System',
                path: '/user',
                icon: <DehazeIcon />,
                subNav: [
                    {
                        title: 'Admin User',
                        path: '/userr',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Roles',
                        path: '/userr',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Permissions',
                        path: './user',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Cron Logs',
                        path: './user',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Issues',
                        path: './user',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'SMS',
                        path: './user',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Import Customers',
                        path: './user',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'Call-Logs',
                        path: './user',
                        icon: <CallIcon />,
                    },
                    {
                        title: 'Approvals',
                        path: './user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Notice',
                        path: './user',
                        icon: <Brightness5Icon />,
                    }
                ]
            },
            {
                title: 'Organization',
                path: './user',
                icon: <DehazeIcon />,
                subNav: [
                    {
                        title: 'isp ',
                        path: '/userr',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Resellers',
                        path: '/userr',
                        icon: <AlignHorizontalLeftIcon />,
                    },
                    {
                        title: 'Branches',
                        path: './user',
                        icon: <AlignHorizontalLeftIcon />,
                    }
                ]
            },
            {
                title: 'Location',
                path: './user',
                icon: <MapIcon />,
            },
            {
                title: 'Customer',
                path: '/user',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'View in Map',
                        path: '/userr',
                        icon: <MapIcon />,
                    },
                    {
                        title: 'All Customer',
                        path: '/userr',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Online Customer',
                        path: './user',
                        icon: <SnowboardingIcon />,
                    },
                    {
                        title: 'Expired Customer',
                        path: './user',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Without MAP',
                        path: './user',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Create Customer',
                        path: './user',
                        icon: <PersonAddAltIcon />,
                    },
                    {
                        title: 'Active Customer',
                        path: './user',
                        icon: <PersonIcon />,
                    },
                    {
                        title: 'Expiring Customer',
                        path: './user',
                        icon: <HourglassEmptyIcon />,
                    }
                ]
            },
            {
                title: 'Profile',
                path: './user',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'All Profile ',
                        path: '/userr',
                        icon: <SupervisorAccountIcon />,
                    }
                ]
            },
            {
                title: 'Package',
                path: './user',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'All Packages ',
                        path: '/userr',
                        icon: <SupervisorAccountIcon />,
                    }
                ]
            },
            {
                title: 'Networking',
                path: '/user',
                icon: <AddLinkIcon />,
                subNav: [
                    {
                        title: 'NAS',
                        path: '/Nas',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'OLT',
                        path: '/userr',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Other Device',
                        path: './user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Radius Logs',
                        path: './user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Pods',
                        path: './user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'FTTH Network',
                        path: './user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Mikrotik Management',
                        path: './user',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'High Power Onus',
                        path: './user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Latency Graph',
                        path: './user',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'Ip Management',
                        path: './user',
                        icon: <AlignHorizontalLeftIcon />,
                    }
                ]
            },
            {
                title: 'Finance',
                path: '/user',
                icon: <AttachMoneyIcon />,
                subNav: [
                    {
                        title: 'Point Of Sale',
                        path: '/Nas',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'All Payments',
                        path: '/userr',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Collection Entry',
                        path: './user',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Paid Invoice',
                        path: './user',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Unpaid Invoice',
                        path: './user',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'All Invoice',
                        path: './user',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Reseller Transcations',
                        path: './user',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Rigo API',
                        path: './user',
                        icon: <AccountTreeIcon />,
                    },
                    {
                        title: 'Recharges',
                        path: './user',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Schedules',
                        path: './user',
                        icon: <AttachMoneyIcon />,
                    }
                ]
            },
            {
                title: 'Support System',
                path: './user',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'Tickets ',
                        path: '/userr',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Teams ',
                        path: '/userr',
                        icon: <SupervisorAccountIcon />,
                    }
                ]
            },
            {
                title: 'Monitoring System',
                path: './user',
                icon: <RemoveRedEyeIcon />,
            },
            {
                title: 'Leads',
                path: './user',
                icon: <ShoppingCartIcon />,
                subNav: [
                    {
                        title: 'All Leads ',
                        path: '/userr',
                        icon: <ShoppingCartIcon />,
                    },
                    {
                        title: 'Create Lead',
                        path: '/userr',
                        icon: <AddShoppingCartIcon />,
                    }
                ]
            },
            {
                title: 'ACS',
                path: './user',
                icon: <MonitorHeartIcon />,
            },
            {
                title: 'Hotspot Manager',
                path: './user',
                icon: <WifiIcon />,
            },
            {
                title: 'TV Manager',
                path: './user',
                icon: <CreditCardIcon />,
            },
            {
                title: 'Mapping',
                path: './user',
                icon: <AccountTreeIcon />,
            },

]
export default SidebarData