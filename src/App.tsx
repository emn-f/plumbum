import './styleGeral.css';
import './App.css';
import logo from './shared/components/logo.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import seta from './shared/components/arrow.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Texto } from './indexGeral';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';

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
