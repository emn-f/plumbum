import { Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext } from '../../contexts';

type Props = {
    children?: React.ReactNode;
};

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};


export const MenuLateral: React.FC<Props> = ({ children }) => {
    const theme = useTheme();

    const mdDown = useMediaQuery(theme.breakpoints.down(1067));
    const { isDrawerClose: isDrawerOpen, toggleDrawerClose: toggleDrawerOpen, drawerOptions } = useDrawerContext();

    return (
        <>
            <Drawer anchor='right' open={isDrawerOpen} variant={mdDown ? 'temporary' : undefined} onClose={toggleDrawerOpen}
            >
                <Box width={theme.spacing(30)} height='15' display='flex' flexDirection='column'>
                    <Box flex={2}>
                        <List component='nav'>
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    to={drawerOption.path}
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    label={drawerOption.label}
                                    onClick={mdDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box>
                {children}
            </Box>
        </>
    )
};