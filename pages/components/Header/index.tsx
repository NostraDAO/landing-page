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

import { ReactComponent as GitHub } from "../../../public/github.svg";
import { ReactComponent as Twitter } from "../../../public/twitter.svg";
import { ReactComponent as Telegram } from "../../../public/telegram.svg";
import { ReactComponent as Discord } from "../../../public/discord.svg";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const style = {

  color : 'white'
};

const theme = createTheme({
  palette: {
      primary: {
          main: "#93100D",
  }
}})

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
            sx={{ fontFamily: "Corleone", fontSize: '1.5em',  mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Nostra<span style={{color: "#93100D"}}>City</span>
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
                <Typography textAlign="center"><Link underline="none" href="#benefits">Benefits </Link></Typography>
              </MenuItem>

              <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link underline="none">Team</Link> </Typography>
              </MenuItem>

              <MenuItem key={3} onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link underline="none"> Roadmap</Link> </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontFamily: "Corleone", flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            NostraCity
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link
              href="#benefits"  
            component="button"
            underline="none"
              key={1}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", fontFamily: "Source Sans Pro", fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Benefits
            </Link>

            <Link
            component="button"
              key={2}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, marginLeft: "10px", color: "white", display: "block", fontFamily: "Source Sans Pro", fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Roadmap
            </Link>

            <Link
            component="button"
              key={3}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, marginLeft: "10px", color: "white", display: "block", fontFamily: "Source Sans Pro", fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Team
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button variant="outlined" sx={{marginRight: '10px'}}>
                  Coming Soon
                </Button>
            <Button className={style} onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                  href="https://discord.gg/nostracityhq"
                  target="_blank"
                >
                  <p>Discord</p>
                </Link>
              </MenuItem>
              <MenuItem key={1} onClick={handleCloseUserMenu}>
                <Link
                  className="tooltip-item"
                  href="https://github.com/NostraDAO/nostradao-frontend"
                  target="_blank"
                >
                  <p>GitHub</p>
                </Link>
              </MenuItem>
              <MenuItem key={1} onClick={handleCloseUserMenu}>
                <Link
                  className="tooltip-item"
                  href="https://twitter.com/NostraDAO"
                  target="_blank"
                >
                  <p>Twitter</p>
                </Link>
              </MenuItem>
              <MenuItem key={1} onClick={handleCloseUserMenu}>
                <Link  href="#" target="_blank">
                  <p>Telegram</p>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default MenuBar;
