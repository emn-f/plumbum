import { createContext, useCallback, useContext, useState } from "react";

type Props = {
    children?: React.ReactNode;
};
interface IDrawerOptions {
    icon: string;
    path: string;
    label: string;
};

interface IDrawerContextData {
    isDrawerClose: boolean;
    toggleDrawerClose: () => void;
    drawerOptions: IDrawerOptions[];
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
};

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<Props> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);


    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerClose: isDrawerOpen, drawerOptions, toggleDrawerClose: toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
};