
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
                        path: '/roles',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Permissions',
                        path: '/permission',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Cron Logs',
                        path: '/cronlog',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Issues',
                        path: '/issues',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'SMS',
                        path: '/sms',
                        icon: <HourglassEmptyIcon />,
                    },
                    {
                        title: 'Import Customers',
                        path: '/importcustomer',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'Call-Logs',
                        path: '/calllogs',
                        icon: <CallIcon />,
                    },
                    {
                        title: 'Approvals',
                        path: '/approvals',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Notice',
                        path: '/notice',
                        icon: <Brightness5Icon />,
                    }
                ]
            },
            {
                title: 'Organization',
                path: '/organization',
                icon: <DehazeIcon />,
                subNav: [
                    {
                        title: 'isp ',
                        path: '/isp',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Resellers',
                        path: '/reseller',
                        icon: <AlignHorizontalLeftIcon />,
                    },
                    {
                        title: 'Branches',
                        path: '/branches',
                        icon: <AlignHorizontalLeftIcon />,
                    }
                ]
            },
            {
                title: 'Location',
                path: '/location',
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
                path: '/profile',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'All Profile ',
                        path: '/allprofile',
                        icon: <SupervisorAccountIcon />,
                    }
                ]
            },
            {
                title: 'Package',
                path: '/package',
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
                        path: '/device',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Radius Logs',
                        path: '/radiuslog',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Pods',
                        path: '/pods',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'FTTH Network',
                        path: '/ftthnetwork',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Mikrotik Management',
                        path: '/mikrotik',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'High Power Onus',
                        path: '/onus',
                        icon: <AddLinkIcon />,
                    },
                    {
                        title: 'Latency Graph',
                        path: '/latency',
                        icon: <Brightness5Icon />,
                    },
                    {
                        title: 'Ip Management',
                        path: '/ip',
                        icon: <AlignHorizontalLeftIcon />,
                    }
                ]
            },
            {
                title: 'Finance',
                path: '/finance',
                icon: <AttachMoneyIcon />,
                subNav: [
                    {
                        title: 'Point Of Sale',
                        path: '/pointofsale',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'All Payments',
                        path: '/allpayment',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Collection Entry',
                        path: '/collectionentry',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Paid Invoice',
                        path: '/paidinvoice',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Unpaid Invoice',
                        path: '/unpaidinvoice',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'All Invoice',
                        path: '/allinvoice',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Reseller Transcations',
                        path: '/resellertranscations',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Rigo API',
                        path: '/rigoapi',
                        icon: <AccountTreeIcon />,
                    },
                    {
                        title: 'Recharges',
                        path: '/recharges',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        title: 'Schedules',
                        path: '/schedules',
                        icon: <AttachMoneyIcon />,
                    }
                ]
            },
            {
                title: 'Support System',
                path: './supportsystem',
                icon: <SupervisorAccountIcon />,
                subNav: [
                    {
                        title: 'Tickets ',
                        path: '/tickets',
                        icon: <SupervisorAccountIcon />,
                    },
                    {
                        title: 'Teams ',
                        path: '/teams',
                        icon: <SupervisorAccountIcon />,
                    }
                ]
            },
            {
                title: 'Monitoring System',
                path: '/monitoring',
                icon: <RemoveRedEyeIcon />,
            },
            {
                title: 'Leads',
                path: '/leads',
                icon: <ShoppingCartIcon />,
                subNav: [
                    {
                        title: 'All Leads ',
                        path: '/allleads',
                        icon: <ShoppingCartIcon />,
                    },
                    {
                        title: 'Create Lead',
                        path: '/createlead',
                        icon: <AddShoppingCartIcon />,
                    }
                ]
            },
            {
                title: 'ACS',
                path: './acs',
                icon: <MonitorHeartIcon />,
            },
            {
                title: 'Hotspot Manager',
                path: './hotspot',
                icon: <WifiIcon />,
            },
            {
                title: 'TV Manager',
                path: './tv',
                icon: <CreditCardIcon />,
            },
            {
                title: 'Mapping',
                path: './mapping',
                icon: <AccountTreeIcon />,
            },

]
export default SidebarData