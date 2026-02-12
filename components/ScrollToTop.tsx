import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Har baar pathname badalne par window top par scroll hogi
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;