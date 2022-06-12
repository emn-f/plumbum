import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from './../themes';
import { Box } from "@mui/system";

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
    const [themeName, setThemName] = useState<'light' | 'dark'>('dark');

    const toggleTheme = useCallback(() => {
        setThemName(oldThemeName => oldThemeName === 'dark' ? 'light' : 'dark');
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'dark') return DarkTheme;

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
