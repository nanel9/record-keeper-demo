import PieChartIcon from '@mui/icons-material/PieChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentsIcon from '@mui/icons-material/Payments';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartIcon from '@mui/icons-material/BarChart';

export const navitems = [
    {
        title: "Overview",
        id: "overview",
        url: "#/account-summary"
    },
    {
        title: "My account",
        id: "my-account",
        children: [
            {
                title: "My portfolio",
                icon: <PieChartIcon sx={{ width: 24, height: 24 }} />,
                url: "#/my-portfolio"
            },
            {
                title: "Contributions",
                icon: <AttachMoneyIcon sx={{ width: 24, height: 24 }} />,
                url: "#/contributions"
            },
            {
                title: "Loans & withdrawals",
                icon: <PaymentsIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Account activity & statements",
                icon: <DescriptionIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Plan information",
                icon: <InfoIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Research investments",
                icon: <SearchIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            }
        ]
    },
    {
        title: "Profile",
        id: "profile",
        children: [
            {
                title: "Personal information",
                icon: <PersonIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Beneficiaries",
                icon: <GroupIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "eDelivery preferences",
                icon: <EmailIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Login security",
                icon: <LockIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Alerts",
                icon: <NotificationsActiveIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            }
        ]
    },
    {
        title: " Quick links",
        id: "quick-links",
        children: [
            {
                title: "Manage contributions",
                icon: <AttachMoneyIcon sx={{ width: 24, height: 24 }} />,
                url: "#/contributions"
            },
            {
                title: "Request a withdrawal",
                icon: <PaymentsIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "View statements & account activity",
                icon: <DescriptionIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Manage investments",
                icon: <PieChartIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Update communication preferences",
                icon: <EmailIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "View portfolio & investment results",
                icon: <BarChartIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Manage beneficiaries",
                icon: <GroupIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Update contact information",
                icon: <PersonIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Research investments",
                icon: <SearchIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
            {
                title: "Request a loan",
                icon: <AttachMoneyIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },      
            {
                title: "",
                icon: "",
                url: ""
            },      
            {
                title: "Request plan information",
                icon: <InfoIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
        ]
    },
    {
        title: "Additional information",
        id: "additional-information",
        children: [
            {
                title: "Participant help center",
                icon: <PersonIcon sx={{ width: 24, height: 24 }} />,
                url: ""
            },
        ]
    }
]