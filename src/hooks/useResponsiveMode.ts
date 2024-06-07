import { useCallback, useEffect } from "react";
import useStoreNavbar from "../navbar.store";

const useResponsiveMode = () => {
  const { setResponsiveMode } = useStoreNavbar();

  const initResponsiveMode = useCallback(() => {
    if (window.innerWidth < 768) {
      setResponsiveMode("mobile");
    } else {
      setResponsiveMode("desktop");
    }
  }, [setResponsiveMode]);

  useEffect(() => {
    // Initialisation de la navbar en fonction de la taille de l'écran
    initResponsiveMode();
    window.addEventListener("resize", initResponsiveMode);
    // Nettoyage des eventListener
    return () => {
      window.removeEventListener("resize", initResponsiveMode);
    };
  }, [initResponsiveMode]);
};

export default useResponsiveMode;
