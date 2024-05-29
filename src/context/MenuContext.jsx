import React, { createContext, useState, useContext, useEffect } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => {
    return useContext(MenuContext);
}

export const MenuProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(true);

    function getBreakpoint() {
        const breakpoints = {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280
        }
    
        const width = window.innerWidth;
    
        if (width > breakpoints.sm && width <= breakpoints.md) {
            return 'sm';
        } else if (width > breakpoints.md && width <= breakpoints.lg) {
            return 'md';
        } else if (width > breakpoints.lg && width <= breakpoints.xl) {
            return 'lg';
        } else if (width < breakpoints.sm ) {
            return 'sm';
        } else {
            return 'xl';
        }
    }

    useEffect(() => {
        const handleResize = () => {
            const breakpoint = getBreakpoint();
            if (breakpoint === 'sm') {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <MenuContext.Provider value={{ showMenu, setShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}