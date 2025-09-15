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
                url: "#/my-portfolio",
                id: "my-account"
            },
            {
                title: "Contributions",
                icon: <AttachMoneyIcon sx={{ width: 24, height: 24 }} />,
                url: "#/contributions",
                id: "my-account"
            },
            {
                title: "Loans & withdrawals",
                icon: <PaymentsIcon sx={{ width: 24, height: 24 }} />,
                url: "#/loans-and-withdrawals",
                id: "my-account"
            },
            {
                title: "Account activity & statements",
                icon: <DescriptionIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "my-account"
            },
            {
                title: "Plan information",
                icon: <InfoIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "my-account"
            },
            {
                title: "Research investments",
                icon: <SearchIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "my-account"
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
                url: "",
                id: "profile"
            },
            {
                title: "Beneficiaries",
                icon: <GroupIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "profile"
            },
            {
                title: "eDelivery preferences",
                icon: <EmailIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "profile"
            },
            {
                title: "Login security",
                icon: <LockIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "profile"
            },
            {
                title: "Alerts",
                icon: <NotificationsActiveIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "profile"
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
                url: "#/contributions",
                id: "quick-links"
            },
            {
                title: "Request a withdrawal",
                icon: <PaymentsIcon sx={{ width: 24, height: 24 }} />,
                url: "#/loans-and-withdrawals",
                id: "quick-links"
            },
            {
                title: "View statements & account activity",
                icon: <DescriptionIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "quick-links"
            },
            {
                title: "Manage investments",
                icon: <PieChartIcon sx={{ width: 24, height: 24 }} />,
                url: "#/my-portfolio",
                id: "quick-links"
            },
            {
                title: "Update communication preferences",
                icon: <EmailIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "quick-links"
            },
            {
                title: "View portfolio & investment results",
                icon: <BarChartIcon sx={{ width: 24, height: 24 }} />,
                url: "#/my-portfolio",
                id: "quick-links"
            },
            {
                title: "Manage beneficiaries",
                icon: <GroupIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "quick-links"
            },
            {
                title: "Update contact information",
                icon: <PersonIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "quick-links"
            },
            {
                title: "Research investments",
                icon: <SearchIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "quick-links"
            },
            {
                title: "Request a loan",
                icon: <AttachMoneyIcon sx={{ width: 24, height: 24 }} />,
                url: "#/loans-and-withdrawals",
                id: "quick-links"
            },      
            {
                title: "",
                icon: "",
                url: "",
                id: "quick-links"
            },      
            {
                title: "Request plan information",
                icon: <InfoIcon sx={{ width: 24, height: 24 }} />,
                url: "",
                id: "quick-links"
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
                url: "",
                id: "additional-information"
            },
        ]
    }
]