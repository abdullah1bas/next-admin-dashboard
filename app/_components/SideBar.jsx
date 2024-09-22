import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar, Box, Tooltip, Typography, styled, useTheme } from "@mui/material";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { DrawerHeader } from "./AppRoot";
import { useEffect } from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const barIcon1 = [
  { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlined />, path: "/mangeTeam" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlined />,
    path: "/contactsInformation",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlined />,
    path: "/invoicesBalances",
  },
];

const barIcon2 = [
  { text: "Profile Form", icon: <PersonOutlined />, path: "/profileForm" },
  { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];

const barIcon3 = [
  { text: "Bar Chart", icon: <BarChartOutlined />, path: "/barChart" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pieChart" },
  { text: "Line Chart", icon: <TimelineOutlined />, path: "/lineChart" },
  { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
];

const knownPaths = ['/','/mangeTeam','/calendar','/contactsInformation','/faq','/profileForm',
  '/geography','/invoicesBalances','/lineChart','/barChart','/pieChart'];

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const {user} = useUser();
  useEffect(() => {
    if (knownPaths.includes(pathname)) {
      document.title = pathname === '/' ? 'Dashboard' : pathname.slice(1);
    } else {
      document.title = 'Not Found';
    }
  },[pathname]);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={() => handleDrawerClose()}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Box>
        <Avatar
          title="user photo"
          alt="Remy Sharp"
          src={user?.imageUrl}
          sx={{
            m: "8px auto",
            width: open ? 88 : 56,
            height: open ? 88 : 56,
            border: "2px solid grey",
            transition: ".3s",
          }}
        />
        
        <Typography
          align="center"
          sx={{ fontSize: open ? 17 : 0, transition: ".3s" }}
        >
          {user?.username}
        </Typography>
        <Typography
          align="center"
          sx={{ fontSize: open ? 14 : 0, transition: ".3s" }}
        >
          {user?.primaryEmailAddress?.emailAddress}
        </Typography>
        <Typography
          align="center"
          color={theme.palette.info.main}
          sx={{ fontSize: open ? 15 : 0, transition: ".3s", mb: 1 }}
        >
          USER
        </Typography>
      </Box>

      <Divider />

      <List>
        {barIcon1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={!open && item.text} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    pathname == item.path &&
                    (theme.palette.mode == "dark" ? grey[800] : grey[300]),
                }}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {barIcon2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={!open && item.text} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    pathname == item.path &&
                    (theme.palette.mode == "dark" ? grey[800] : grey[300]),
                }}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {barIcon3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={!open && item.text} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    pathname == item.path &&
                    (theme.palette.mode == "dark" ? grey[800] : grey[300]),
                }}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
