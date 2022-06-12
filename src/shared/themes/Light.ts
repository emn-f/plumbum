import { } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/system';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            constrastText: '#ffffffff',
        },
        secondary: {
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            constrastText: '#ffffffff',
        },
        background: {
            default: '#f7f63',
            paper: '#ffffffff',
        }
    }
});