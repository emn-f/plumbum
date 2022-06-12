import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

type Props = {
};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, titulo }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();
    return (
        <Box height='100' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} alignItems='center' height={theme.spacing(12)} display='flex'>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>
                            menu
                        </Icon>
                    </IconButton>)}


                <Typography variant='h5'>
                    {titulo}
                </Typography>
            </Box>

            <Box>
                Blabul
            </Box>

            <Box>
                {titulo}
            </Box>

            <Box>
                {children}
            </Box>

        </Box>

    );
};