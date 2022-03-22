import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Data } from "../pages/Data";
import { Top } from "../pages/Top";
import { SearchBox } from "../molecules/SearchBox";

const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const HeaderSidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {/* header全体の構成start---------------------*/}
          <AppBar position="fixed" open={open}>
            <Toolbar>
              {/* ハンバーガーメニューの表示ー－－－－－－－ */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  mr: 2,
                  ...(open && {
                    display: "none",
                  }),
                }}
              >
                <MenuIcon />
              </IconButton>
              {/* ここまでー－－－－－－－－－－－－－－－－ */}
              {/* Topタイトル */}
              <Typography variant="h6" noWrap component="div">
                Google
                <Link to="/top" color="white">
                  ニュース
                </Link>
              </Typography>
              {/*ここまでー－－－－－－－－－－－－－－－－－－ */}
              {/* 検索バーコンポーネント変化 */}
              <SearchBox />
              {/* ここまで－－－－－－－－－－－－－－－－－ */}
            </Toolbar>
          </AppBar>

          {/* sidebarの記述start */}
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            {/* sideBarのトップ部分 ー－－－－－－－－－－－－－－*/}
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                Google
                <Link to="/top" color="white">
                  <p>ニュース</p>
                </Link>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            {/* ここまでー－－－－－－－－－－－－－－－－－－ */}

            {/* 区切り線*/}
            <Divider />
            {/* ここまでー－－－－－－－－－－－－－－－－－－ */}

            {/* sidebarのリストー－－－－－－－－－－－－ */}
            <List>
              {[
                <Link to="/top" color="inherit" underline="none">
                  トップニュース
                </Link>,
                <Link to="/data">おすすめ</Link>,
                "フォロー中",
                "ショーケース",
                "保存済み検索条件",
                // map関数の引数として（入力した文字と、配列番号を渡す）
              ].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {/* 下記は index % 2 === 0がtrueならMail falseでInboxを返す*/}
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
              {/* ここまでー－－－－－－－－－－－－－－－－－－ */}
            </List>
            {/* 区切り線 */}
            <Divider />
            {/* ここまでー－－－－－－－－－－－－－－－－－－ */}
            {/* sidebarのリスト */}
            <List>
              {["COVID-19"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            {/* ここまでー－－－－－－－－－－－－－－－－－－ */}
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
          </Main>
        </Box>
      </ClickAwayListener>
      <switch>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/data">
          <Data />
        </Route>
      </switch>
    </BrowserRouter>
  );
};
