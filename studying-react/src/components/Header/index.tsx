import * as M from '@mui/material';
import * as IM from '@mui/icons-material';

function Header() {
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
                        flexGrow: 1,
                    }}>
                    LOGO
                </M.Typography>
                <IM.LocalFloristRounded sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <M.Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow: 1,
                    }}>
                    LOGO
                </M.Typography>
                <M.IconButton
                    size="large"
                    edge="end"
                    aria-label="cadastro do usuário"
                    color="inherit"
                    sx={{ mr: 3 }}>
                    <IM.AccountCircle />
                </M.IconButton>
            </M.Toolbar>
        </M.AppBar>
    );
}

export default Header;
