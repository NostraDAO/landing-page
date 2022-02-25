import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import "./Header.module.css";
import { Scrollchor } from "react-scrollchor";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#93100D",
    },
  },
});

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontFamily: "Corleone",
                fontSize: "1.5em",
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              Nostra<span style={{ color: "#93100D" }}>City</span>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key={1} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link underline="none">
                      <Scrollchor to="#benefits"> Benefits</Scrollchor>
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link underline="none" href="#team">
                      Team
                    </Link>{" "}
                  </Typography>
                </MenuItem>

                <MenuItem key={3} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link underline="none"> Roadmap</Link>{" "}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontFamily: "Corleone",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              NostraCity
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link
                component="button"
                underline="none"
                key={1}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Source Sans Pro",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <Scrollchor to="#benefits"> Benefits</Scrollchor>
              </Link>

              <Link
                component="button"
                underline="none"
                key={2}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  marginLeft: "10px",
                  color: "white",
                  display: "block",
                  fontFamily: "Source Sans Pro",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <Scrollchor to="#roadmap">Roadmap</Scrollchor>
              </Link>

              <Link
                component="button"
                underline="none"
                key={3}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  marginLeft: "10px",
                  color: "white",
                  display: "block",
                  fontFamily: "Source Sans Pro",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <Scrollchor to="#team">Team</Scrollchor>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                href="https://app.nostradao.com"
                target="_blank"
                variant="contained"
                sx={{
                  marginRight: "10px",
                  fontFamily: "Source Sans Pro",
                  fontWeight: "bold",
                }}
              >
                Coming Soon
              </Button>
              <Button
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  textTransform: "uppercase",
                  fontFamily: "Source Sans Pro",
                  fontWeight: "bold",
                }}
              >
                Social
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={1} onClick={handleCloseUserMenu}>
                  <Link
                    className="tooltip-item"
                    underline="none"
                    href="https://discord.gg/nostracityhq"
                    target="_blank"
                  >
                    <p>Discord</p>
                  </Link>
                </MenuItem>
                <MenuItem key={1} onClick={handleCloseUserMenu}>
                  <Link
                    className="tooltip-item"
                    underline="none"
                    href="https://github.com/NostraDAO/nostradao-frontend"
                    target="_blank"
                  >
                    <p>GitHub</p>
                  </Link>
                </MenuItem>
                <MenuItem key={1} onClick={handleCloseUserMenu}>
                  <Link
                    className="tooltip-item"
                    underline="none"
                    href="https://twitter.com/NostraDAO"
                    target="_blank"
                  >
                    <p>Twitter</p>
                  </Link>
                </MenuItem>
                <MenuItem key={1} onClick={handleCloseUserMenu}>
                  <Link href="https://t.me/NostraCity" underline="none" target="_blank">
                    <p>Telegram</p>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Link
              key={3}
              target="_blank"
              underline="none"
              href="http://bit.ly/NostraCity"
              sx={{
                my: 2,
                marginLeft: "10px",
                display: "block",
                textTransform: "uppercase",
                fontFamily: "Source Sans Pro",
                fontWeight: "bold",
              }}
            >
              Documentation
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default MenuBar;
