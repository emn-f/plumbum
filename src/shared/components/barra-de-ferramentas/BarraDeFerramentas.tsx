import { Box, Button, Paper, TextField, useTheme } from "@mui/material";

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const BarraDeFerramentas: React.FC<ILayoutBaseProps> = ({ children }) => {
    const theme = useTheme();
    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display='flex'
            alignItems='center'
            height={theme.spacing(5)}
            component={Paper}
            >
            <TextField />
            <Button>Novo</Button>

        </Box>

    );

}