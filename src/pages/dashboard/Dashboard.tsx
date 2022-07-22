import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const Dashboard: React.FC<ILayoutBaseProps> = ({ children }) => {

  return (
    <LayoutBase
    titulo='Home'
      /*
    }
    barraDeFerramentas={<>Barra de ferramentas</>}>
      <BarraDeFerramentas titulo={'Plumbum'} />
  */>
      Teste
    </LayoutBase>
  );
};