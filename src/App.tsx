import '././shared/styles/style.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components/menu-lateral/Menu';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import React from 'react';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
