import './styleGeral.css';
import './App.css';
import logo from './shared/components/logo.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import seta from './shared/components/arrow.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Texto } from './indexGeral';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes';

export const App = () => {
  return (

    <BrowserRouter>

      <MenuLateral>
        <AppRoutes />

      </MenuLateral>


    </BrowserRouter>

  );
};
