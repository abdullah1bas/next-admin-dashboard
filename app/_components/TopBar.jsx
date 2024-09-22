"use client";
import { IconButton, Stack, Toolbar, Tooltip, styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from "./SearchInput";
import { NotificationsOutlined } from "@mui/icons-material";
import ModeButton from "./ModeButton";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import changeClerk from "./changeClerk";

const drawerWidth = 240;

const AppBarr = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// eslint-disable-next-line react/prop-types
const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const { user } = useUser();
  changeClerk(".cl-internal-16vtwdp");
  changeClerk(".cl-internal-lk7758");
  return (
    <AppBarr
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <Tooltip title="menu">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <SearchInput />

        <Stack direction="row" flexGrow={1} mr={1} justifyContent="end">
          <ModeButton setMode={setMode} />

          <Tooltip title="notifications">
            <IconButton color="inherit">
              <NotificationsOutlined />
            </IconButton>
          </Tooltip>
        </Stack>
        {!user ? (
          <div className="sm:flex sm:gap-4">
            {[
              {
                classN:
                  "block login-button bg-primary text-white hover:bg-teal-500 dark:hover:bg-teal-500",
                name: "Login",
                ref: "/sign-in",
              },
              {
                classN: "login-button register-button",
                name: "Register",
                ref: "/sign-up",
              },
            ].map((link) => (
              <Link key={link.ref} href={link.ref} className={link.classN}>
                {link.name}
              </Link>
            ))}
          </div>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </Toolbar>
    </AppBarr>
  );
};

export default TopBar;
