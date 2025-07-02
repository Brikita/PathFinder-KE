        import { useEffect } from "react";
        import { useLocation } from "react-router-dom"; // or withRouter if using older React Router

        const ScrollToTop = () => {
            const location = useLocation();

            useEffect(() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }, [location.pathname]);

            return null; // Or render children if this component wraps other components
        };

        export default ScrollToTop;