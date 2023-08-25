
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
                path: '/dashboard',
                icon: <AvTimerIcon />,
                subNav: [
                    {
                        title: 'Custom dashboard',
                        path: '/customer',
                        icon: <AvTimerIcon />,
                    },
                    {
                        title: 'Finance dashboard',
                        path: '/finance',
                        icon: <LocalAtmIcon />,
                    },
                    {
                        title: 'Reseller Customer',
                        path: '/reseller',
                        icon: <AvTimerIcon />,
                    },
                    {
                        title: 'Isp Customer',
                        path: '/isp',
                        icon: <AvTimerIcon />,
                    }
                ]
            },
            {
                title: 'System',
                path: '/system',
                icon: <DehazeIcon />,
                subNav: [
                    {
                        title: 'Admin User',
                        path: '/userdetail',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Roles',
                        path: '/user',
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
                        path: '/user',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Resellers',
                        path: '/user',
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
                path: '/customer',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'View in Map',
                        path: '/customerdetail',
                        icon: <MapIcon />,
                    },
                    {
                        title: 'All Customer',
                        path: '/customerdetail',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Online Customer',
                        path: '/customerdetail',
                        icon: <SnowboardingIcon />,
                    },
                    {
                        title: 'Expired Customer',
                        path: '/customerdetail',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Without MAP',
                        path: '/customerdetail',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Create Customer',
                        path: '/customerform',
                        icon: <PersonAddAltIcon />,
                    },
                    {
                        title: 'Active Customer',
                        path: '/customerdetail',
                        icon: <PersonIcon />,
                    },
                    {
                        title: 'Expiring Customer',
                        path: '/customerdetail',
                        icon: <HourglassEmptyIcon />,
                    }
                ]
            },
            {
                title: 'Profile',
                path: '/user',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'All Profile ',
                        path: '/user',
                        icon: <SupervisorAccountIcon />,
                    }
                ]
            },
            {
                title: 'Package',
                path: './package',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'All Packages ',
                        path: '/allpackage',
                        icon: <SupervisorAccountIcon />,
                    }
                ]
            },
            {
                title: 'Networking',
                path: '/networking',
                icon: <AddLinkIcon />,
                subNav: [
                    {
                        title: 'NAS',
                        path: '/Nas',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'OLT',
                        path: '/olt',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Other Device',
                        path: '/user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Radius Logs',
                        path: '/user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Pods',
                        path: '/user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'FTTH Network',
                        path: '/user',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Mikrotik Management',
                        path: '/user',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'High Power Onus',
                        path: '/onus',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Latency Graph',
                        path: '/user',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'Ip Management',
                        path: '/user',
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
                        path: '/user',
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
                        path: '/user',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Teams ',
                        path: '/user',
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
                        path: '/user',
                        icon: <ShoppingCartIcon />,
                    },
                    {
                        title: 'Create Lead',
                        path: '/user',
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