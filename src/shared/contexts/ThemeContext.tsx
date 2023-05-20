import { Box } from '@mui/system';
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './../themes';

type Props = {
    children?: React.ReactNode;
};

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
    const [themeName, setThemName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;

        return LightTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width='100' height='100' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
