import { useEffect, useState, useRef} from "react";
import { boolean } from "zod";

interface AnimetedNav{
    ({
        sensible,
        minimumTop,
    }: {
        sensible?: number;
        minimumTop?: number;
    }): boolean;
}

export const useAnimetedNav: AnimetedNav = ({
    sensible = 10, 
    minimumTop = 50,
}) => {
    const [openNav, setOpenNav] = useState<boolean>(true);
    const isScrollGoingDown = useRef<boolean>(false);
    const lastPositionScroll = useRef<number>(0);
    const scoreUp = useRef<number>(0);
    const scoreDown = useRef<number>(0);

    useEffect(() => {
        const handleScroll = (): void => {
            if (
                document.scrollingElement && document.scrollingElement.scrollTop >= lastPositionScroll.current
            ) {
                isScrollGoingDown.current = true;
                scoreDown.current = scoreDown.current + 1;
                scoreUp.current = 0;
            } else {
                isScrollGoingDown.current = false;
    
                scoreDown.current = 0;
                scoreUp.current = scoreUp.current + 1;
            }
    
            lastPositionScroll.current = document.scrollingElement ? document.scrollingElement.scrollTop : 0;
    
            if (
                document.scrollingElement && document.scrollingElement.scrollTop <= minimumTop
            ) {
                setOpenNav(true);
            } else {
                if (isScrollGoingDown.current && scoreDown.current >= sensible){
                    setOpenNav(false);
                } else if (!isScrollGoingDown.current && scoreUp.current >= sensible){
                    setOpenNav(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sensible, minimumTop]);

    return openNav
};