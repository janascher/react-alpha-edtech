import { useState } from 'react';
import * as M from '@mui/material';
import * as IM from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

function Menu() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <M.AppBar position="static">
            <M.Toolbar sx={{ background: '#8f6aae' }}>
                <IM.LocalFloristRounded sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <M.Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 3,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </M.Typography>

                <M.Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <M.IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </M.IconButton>
                    <M.Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {routes.map((page, index) => (
                            <M.Link
                                key={index}
                                component={NavLink}
                                to={page.to}
                                color="black"
                                underline="none"
                                variant="button"
                            >
                                <M.MenuItem onClick={handleCloseNavMenu}>
                                    <M.Typography textAlign="center">{page.title}</M.Typography>
                                </M.MenuItem>
                            </M.Link>
                        ))}
                    </M.Menu>
                </M.Box>
                <IM.LocalFloristRounded sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <M.Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow: 1,
                    }}
                >
                    LOGO
                </M.Typography>
                <M.Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <M.Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginLeft: '1rem',
                        }}
                    >
                        {routes.map((page, index) => (
                            <M.Link
                                key={index}
                                component={NavLink}
                                to={page.to}
                                color="white"
                                underline="none"
                                variant="button"
                                sx={{ fontWeight: '500', marginLeft: '2rem' }}
                            >
                                {page.title}
                            </M.Link>
                        ))}
                    </M.Box>
                </M.Box>
                <M.IconButton
                    size="large"
                    edge="end"
                    aria-label="cadastro do usuário"
                    color="inherit"
                    sx={{ mr: 3 }}
                >
                    <IM.AccountCircle />
                </M.IconButton>
            </M.Toolbar>
        </M.AppBar>
    );
}

export default Menu;
